const client = require('../core/Bot');
const bot = client.connect();
const redis = require('../core/Redis').connect();
const fetch = require('node-fetch')

bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong !');
    }
});

module.exports.findUser = ivao_user => {
    return new Promise ((resolve, reject) => {
        redis.hgetall(ivao_user.id, (err, member) => {
            if(err){
                console.log(err);
                resolve();
            }
            resolve(member);
        })
    })
}

bot.on('guildMemberAdd', async member => {
    //Get currently cached invites
    const cached_invites = client.cached_invites.get(process.env.GUILD_ID)

    //Get newest invites from Discord
    const new_invites = await member.guild.fetchInvites();

    //Find used invite
    const used_invite = new_invites.find( invite => {
        let cinvite = cached_invites.get(invite.code);
        return cinvite && cinvite.uses < invite.uses;
    });

    client.cached_invites = new_invites; //Replace invites cache list by the new list

    // Check invite exists and inviter is legit
    if(used_invite && used_invite.inviter.username === 'IVAOFR'){
        //Find matching IVAO user in Redis
        redis.hgetall(used_invite.code, (err, ivao_user) => {
            if(err) {
                //Delete vite if something goes wrong
                used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
                console.error(`Error occured while getting user invite from db`, err);
                throw err;
            }

            if(ivao_user === null) return console.error(`No matching user found with invite ${used_invite.code}`);

            //Register user into db
            redis.hmset(member.user.id,
                "vid",ivao_user.vid,
                "name", `${ivao_user.name}`,
                "discord_id", member.user.id,
                "staff", ivao_user.staff,
                "created_at", new Date().getTime()
            )
            //Delete invite info
            redis.del(used_invite.code, (err) => { if(err) throw err });
            used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
            client.log(`${member.user.tag} joined using invite code ${used_invite.code} from ${used_invite.inviter.username}. Invite was used ${used_invite.uses} times since its creation.`)
        })
    }else{
        client.log(`Invite not found or Inviter is not correct`);
        client.log(`used_invite found is ${used_invite}`);
        client.log(`inviter found is ${used_invite.inviter.username}`);
        used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
    }
});

bot.on('guildMemberUpdate', async (old, member) => {
    try{
        let active_screening = await member.guild.fetchMembershipScreening()
        if(active_screening.enabled && member.pending === false){
            redis.hgetall(member.user.id, (err, ivao_user) => {

                //try to ask for info to server
                if(ivao_user === null){
                    return
                    // fetch(`${process.env.WEBSITE_DISCORD_API_URL}/api/discord/user`, {
                    //     method:'PUT',
                    //     body: {
                    //         token: process.env.WEBSITE_DISCORD_API_TOKEN,
                    //         ivao_user
                    //     },
                    // }).then(() => {});
                }

                //Set member username
                let username = `${ivao_user.name} - ${ivao_user.vid}`;
                if(member.nickname !== username){
                    member.setNickname(username);
                    // //Update website
                    // fetch(`${process.env.WEBSITE_DISCORD_API_URL}/api/discord/user`, {
                    //     method:'PUT',
                    //     body: {
                    //         token: process.env.WEBSITE_DISCORD_API_TOKEN,
                    //         ivao_user
                    //     },
                    // }).then(() => {});
                }

                let staff_role = member.guild.roles.cache.find(role => role.name === 'staff')
                let member_role = member.guild.roles.cache.find(role => role.name === 'membre')
                let role = (ivao_user.staff) ? staff_role : member_role;

                if(!member.roles.cache.has(role.id)) member.roles.add(role);

                client.log(`User ${member.user.id} is known as ${username} and has role ${role.name}`)
            });
        }
    }catch(e){}
})

bot.on('guildMemberRemove', async (member) => {
    redis.del(member.user.id, (err) => { if(err) throw err; });
});