const storage = require('../store/store')(process.env.STORAGE)
const client = require('../core/Bot')(storage);
const DiscordUser = require('../core/DiscordUser')
const bot = client.connect();
const Roles = require('./roles')()


bot.on('guildMemberAdd', async member => {
    //Get currently cached invites
    const cached_invites = await client.cached_invites.get(process.env.GUILD_ID)

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
    if(used_invite && used_invite.inviter.username === 'IVAO FR DEV'){
        //Ask website for DiscordUser
        await client.findDiscordUser({invite_code: used_invite.code})
            .then( async discord_user => {
                discord_user.discord_id = member.id;
                discord_user.discord_tag = member.user.tag

                await used_invite.delete().catch(err => console.log(err));

                client.log(`IVAO Member ${discord_user.user_id} clicked on his invitation link`)

                return discord_user;
            })
            .then (discord_user => storage.update(discord_user))
            .catch((err) => {
                console.error(err)
            });

        //Find matching IVAO user in Redis
        await client.log(`${member.user.tag} joined using invite code ${used_invite.code} from ${used_invite.inviter.username}. Invite was used ${used_invite.uses} times since its creation.`)
    }else{
        await client.log(`Invite not found or Inviter is not correct`);
        await client.log(`used_invite found is ${used_invite}`);
        await client.log(`inviter found is ${used_invite.inviter.username}`);
        await used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
    }
});

bot.on('guildMemberUpdate', async (old, member) => {
    try{
        const is_active = (old.pending === false && member.pending === false)
        //detect rules acceptations
        let active_screening = await member.guild.fetchMembershipScreening()
        if(active_screening.enabled && old.pending === true && member.pending === false){
            await client.log(`Fetching roles for Guild ${JSON.stringify(client.guild)}`)
            let roles = Roles.fetchRoles(client.guild)
            await client.log(`Roles retrieved  ${JSON.stringify(roles)}`)
            await client.findDiscordUser({discord_id: member.user.id})
                .then( async discord_user => {
                    await client.log(`IVAO Member ${discord_user.nickname} has accepted rules`)

                    await client.log(`Member event object's nickname: ${member.nickname}`)
                    await client.log(`Storage member object's nickname:  ${discord_user.nickname}`)
                    //Set member username
                    if(member.nickname !== discord_user.nickname){
                        await client.log(`Setting nickname...`)
                        await member.setNickname(discord_user.nickname);
                        await client.log(`Nickname set to ${discord_user.nickname}`)
                    }

                    let to_assign = [roles.member_role];
                    await client.log(`Is storage member staff? ${discord_user.is_staff}`)
                    if(discord_user.is_staff){
                        to_assign.push(roles.staff_role);
                    }

                    await Roles.addRoles(member, to_assign)
                    // if(!member.roles.cache.has(role.id)) await member.roles.add(role);
                    await client.log(`User ${member.user.id} is known as ${discord_user.nickname} and has role ${to_assign.map(role => role.name).join(' ')}`)
                    discord_user.is_pending = false;
                    discord_user.is_active = true;
                    return discord_user;
                })
                .then (discord_user => storage.update(discord_user))
                .catch((err) => {
                    console.error(err)
                });

        }

    }catch(e){}
})

bot.on('guildMemberRemove', async (member) => {

    if (!member.joinedAt){
        await client.log('Without joinAt')
        await client.log(`json ${JSON.stringify(member)} \r\n string ${member.toString()}`)
        await client.log('member.partial = ' + member.partial)
    }else{
        await client.log('With joinAt')
        await client.log(`json ${JSON.stringify(member)} \r\n string ${member.toString()}`)
        await client.log('member.partial = ' + member.partial)
    }

    const discord_user = new DiscordUser({
        discord_id: member.id
    });

    await storage.remove(discord_user).then(result => {
        console.log(result)
        if(result.status < 400){
            client.log(`Discord member with id ${discord_user.discord_id} has been removed from the website`);
        }else{
            client.log(`Could not remove member from website, visits https://ivao.fr/fr/discord_users and remove member ${discord_user.discord_id}`);
        }
        return true
    })
});