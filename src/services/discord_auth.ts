import { DiscordUser, Bot } from "../core";
import * as Roles from "./roles"

export const init = async () => {
  const bot = Bot.client

  bot.on('guildMemberAdd', member => {
    console.log('guildMemberAdd', member);
  });

  bot.on('guildMemberUpdate', async (old, member) => {
      try {
        //detect rules acceptations
        if (old.pending === true && member.pending === false) {

          const logs = [];
          const discord_user = await Bot.findDiscordUser({discord_id: member.user.id})
          logs.push(`[Update Member ${member.user.id}] IVAO Member ${discord_user.nickname} has accepted rules`)
          discord_user.is_pending = false;
          discord_user.is_active = true;
          logs.push(`[Update Member ${member.user.id}] Fetching roles...`)
          let roles = await Roles.fetchRoles(Bot.guild)
          let to_assign = discord_user.expectedRoles(roles);
          logs.push(`[Update Member ${member.user.id}] Roles retrieved.`)

          await Roles.addRoles(member, to_assign);

          logs.push(`User ${member.user.id} is known as ${discord_user.nickname} and has role ${to_assign.map(role => role.name).join(' ')}`)

          Bot.log(logs.join('\r\n'))

          Bot.storage.update(discord_user)
        }
      } catch (err) {
        console.error(err)
      }
  })

  bot.on('guildMemberRemove', (member) => {
    (async function (member) {
      const discord_user = new DiscordUser({
        discord_id: member.id
      });
      const result = await Bot.storage.remove(discord_user)
      console.log(result)
      if (result.status < 400) {
        Bot.log(`Discord member with id ${discord_user.discord_id} has been removed from the website`);
      } else {
        Bot.log(`Could not remove member from website, visits https://ivao.fr/fr/discord_users and remove member ${discord_user.discord_id}`);
      }
    })(member);
  });
}