import { Bot } from "../core/Bot"
import { DiscordUser } from "../core";
import * as Roles from "./roles"

export const init = async () => {
  const bot = Bot.client

  bot.on("inviteDelete", (invite) => {
    // Delete the Invite from Cache
    Bot.cached_invites.get(invite.guild.id).delete(invite.code);
  });

  bot.on("inviteCreate", (invite) => {
    // Update cache on new invites
    Bot.cached_invites.get(invite.guild.id).set(invite.code, invite);
  });

  bot.on('guildMemberAdd', async member => {

    //Get newest invites from Discord
    const new_invites = await member.guild.invites.fetch();
    //Get currently cached invites
    const cached_invites = Bot.cached_invites.get(process.env.GUILD_ID)
    if (!cached_invites) Bot.log('no cached_invites found')

    const copy_invites = Bot.storeInviteArray(new_invites)
    Bot.cached_invites.set(Bot.guild.id, copy_invites)
    //Find used invite
    const used_invite = new_invites.find(invite => {
      let cinvite = cached_invites.get(invite.code);
      return cinvite && cinvite.uses < invite.uses;
    });

    if(used_invite){
      const used_invite_cache = {...used_invite}
      Bot.cached_invites.set(process.env.GUILD_ID, new_invites); //Replace invites cache list by the new list
      // Check invite exists and inviter is legit
      if (used_invite_cache && used_invite_cache.inviter.username === process.env.BOT_USERNAME) {
        //Ask website for DiscordUser
        await Bot.findDiscordUser({invite_code: used_invite.code})
          .then(async discord_user => {
            discord_user.discord_id = member.id;
            discord_user.discord_tag = member.user.tag

            await used_invite.delete().catch(err => console.log(err));

            Bot.log(`[Add Member] IVAO Member ${discord_user.user_id} clicked on his invitation link`)
            return discord_user;
          })
          .then(discord_user => Bot.storage.update(discord_user))
          .catch((err) => {
            console.error(err)
          });

        //Find matching IVAO user in Redis
        await Bot.log(`${member.user.tag} joined using invite code ${used_invite.code} from ${used_invite.inviter.username}. Invite was used ${used_invite.uses} times since its creation.`)
      } else {
        await Bot.log(`[Add Member] Invite not found or Inviter is not correct`);
        await Bot.log(`[Add Member] used_invite found is ${used_invite_cache}`);
        await Bot.log(`[Add Member] inviter found is ${used_invite_cache.inviter.username}`);
        await used_invite_cache.delete().then(result => console.log(result)).catch(err => console.log(err));
      }
    }
  });

  bot.on('guildMemberUpdate', async (old, member) => {
    try {
      const is_active = (old.pending === false && member.pending === false)
      //detect rules acceptations
      if (old.pending === true && member.pending === false) {
        await Bot.findDiscordUser({discord_id: member.user.id})
          .then(async discord_user => {
            await Bot.log(`[Update Member ${member.user.id}] IVAO Member ${discord_user.nickname} has accepted rules`)
            //Set member username
            if (member.nickname !== discord_user.nickname) {
              await member.setNickname(discord_user.nickname);
              await Bot.log(`[Update Member] Nickname set to ${discord_user.nickname}`)
            }
            discord_user.is_pending = false;
            discord_user.is_active = true;
            return discord_user;
          })
          .then(async discord_user => {
            await Bot.log(`[Update Member ${member.user.id}] Fetching roles...`)
            let roles = Roles.fetchRoles(Bot.guild)
            let to_assign = discord_user.expectedRoles(roles);
            await Bot.log(`[Update Member ${member.user.id}] Roles retrieved.`)

            await Roles.addRoles(member, to_assign);

            await Bot.log(`User ${member.user.id} is known as ${discord_user.nickname} and has role ${to_assign.map(role => role.name).join(' ')}`)

            return discord_user;
          })
          .then(discord_user => Bot.storage.update(discord_user))
          .catch((err) => {
            console.error(err)
          });

      }

    } catch (e) {
    }
  })

  bot.on('guildMemberRemove', async (member) => {


    const discord_user = new DiscordUser({
      discord_id: member.id
    });

    await Bot.storage.remove(discord_user).then(result => {
      console.log(result)
      if (result.status < 400) {
        Bot.log(`Discord member with id ${discord_user.discord_id} has been removed from the website`);
      } else {
        Bot.log(`Could not remove member from website, visits https://ivao.fr/fr/discord_users and remove member ${discord_user.discord_id}`);
      }
      return true
    })
  });
}