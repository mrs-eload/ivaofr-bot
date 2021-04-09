const storage = require('../store/store')(process.env.STORAGE)
const client = require('../core/Bot')(storage);
const DiscordUser = require('../core/DiscordUser')
const bot = client.connect();
const Roles = require('./roles')()


bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong !');
    }
});

module.exports.findUser = ivao_user => {
    const discord_user = new DiscordUser({
        user_id: ivao_user.id,
    })
    return storage.get(discord_user)
}

bot.on('guildMemberAdd', async member => {
    //Get currently cached invites
    const cached_invites = client.cached_invites.get(process.env.GUILD_ID)

    //Get newest invites from Discord
    const new_invites = await member.guild.fetchInvites();

    if(!cached_invites) client.log('no cached_invites found')

    //Find used invite
    const used_invite = new_invites.find( invite => {
        let cinvite = cached_invites.get(invite.code);
        return cinvite && cinvite.uses < invite.uses;
    });

    client.cached_invites = new_invites; //Replace invites cache list by the new list

    // Check invite exists and inviter is legit
    if(used_invite && used_invite.inviter.username === 'IVAOFR'){
        //Ask website for DiscordUser
        const discord_user = new DiscordUser({
            invite_code: used_invite.code
        });

        await storage.find(discord_user)
        .then(result => result.json()).catch((err) => { throw new Error(err) })
        .then(data => {
            if(data.status <= 400){
                console.error(`error with request`)
                console.log(data);
                throw new Error(`error with request`);
            }
            for(let key in data.response){
                discord_user[key]= data.response[key];
            }
            discord_user.discord_id = member.id;
            discord_user.discord_tag = member.user.tag
            used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
            client.log(`IVAO Member ${discord_user.user_id} clicked on his invitation link`)

            return discord_user;

        })
        .then (discord_user => storage.update(discord_user))
        .catch((err) => {
            console.error(err)
        });

        //Find matching IVAO user in Redis
        client.log(`${member.user.tag} joined using invite code ${used_invite.code} from ${used_invite.inviter.username}. Invite was used ${used_invite.uses} times since its creation.`)
    }else{
        client.log(`Invite not found or Inviter is not correct`);
        client.log(`used_invite found is ${used_invite}`);
        client.log(`inviter found is ${used_invite.inviter.username}`);
        used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
    }
});

bot.on('guildMemberUpdate', async (old, member) => {
    try{
        //detect rules acceptations
        let active_screening = await member.guild.fetchMembershipScreening()
        if(active_screening.enabled && old.pending === true && member.pending === false){
            const discord_user = new DiscordUser({
                discord_id: member.id
            });
            let roles = Roles.fetchRoles(member.guild)
            await storage.find(discord_user)
                .then(result => result.json()).catch((err) => { throw new Error(err) })
                .then(data => {
                    if(data === null || data.status <= 404){
                        console.error(`error with request`)
                        console.log(data);
                        throw new Error(`error with request`);
                    }
                    for(let key in data.response){
                        discord_user[key]= data.response[key];
                    }

                    client.log(`IVAO Member ${discord_user.nickname} has accepted rules`)
                    //Set member username
                    if(member.nickname !== discord_user.nickname){
                        member.setNickname(discord_user.nickname);
                    }

                    let role = roles.member_role;
                    if(discord_user.is_staff){
                        role = roles.staff_role;
                    }

                    if(!member.roles.cache.has(role.id)) member.roles.add(role);
                    client.log(`User ${member.user.id} is known as ${discord_user.nickname} and has role ${role.name}`)
                    discord_user.is_pending = false;
                    discord_user.is_active = true;
                    return discord_user;
                })
                .then (discord_user => storage.update(discord_user))
                .catch((err) => {
                    console.error(err)
                });

        }

        //Active member
        if(old.pending === false && member.pending === false){

        }

    }catch(e){}
})

bot.on('guildMemberRemove', async (member) => {
    // redis.del(member.user.id, (err) => { if(err) throw err; });
    const discord_user = new DiscordUser({
        discord_id: member.id
    });
    await storage.remove(discord_user).then(result => {
        console.log(result)
        if(result.status < 400){
            client.log(`Discord member with id ${discord_user.discord_id} has been removed from the website`);
        }
    })
});