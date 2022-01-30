import { Bot } from "../core/Bot";
import * as Roles from "./roles"
import { DiscordUser } from "../core";

export const syncUsers = async (users) => {
  return await Promise.all(users.filter(u => u.discord_id !== null ).map( async user => {
    const discord_user = new DiscordUser(user);
    await Bot.guild.members.fetch(discord_user.discord_id)
      .then(async member => {
        let promises = [];
        let update_necessary = false;
        if (discord_user.is_pending === member.pending) {
          // Check for any discord tag change
          if (discord_user.discord_tag !== member.user.tag) {
            update_necessary = true;
            discord_user.discord_tag = member.user.tag
          }
          // Check discord member elements
          if (discord_user.is_active) {
            if (discord_user.nickname !== member.nickname) {
              await member.setNickname(discord_user.nickname)
                .then(status => {
                  promises.push(status);
                  Bot.log(`[Auto Sync] Nickname of member ${discord_user.user_id} successfully updated to : "${discord_user.nickname}".`);
                })
                .catch(err => console.log(err));
            }

            const roles = Roles.fetchRoles(Bot.guild);
            const reserved_roles = Roles.reservedRoles;
            const expectedRoles = discord_user.expectedRoles(roles);
            const expectedRolesNames = expectedRoles.map(r => r.name);
            const rolesToRemove = member.roles.cache.filter(r => {
                return reserved_roles.includes(r.name) &&
                  r.name !== 'admin' &&
                  !expectedRolesNames.includes(r.name);
            });
            await Roles.addRoles(member, expectedRoles).then(status => promises.push(status));
            await Roles.removeRoles(member, rolesToRemove).then(status => promises.push(status));
          }
        } else {
          // Pending status do not match
          await member.send("Un problème de statuts a été détecté sur votre compte. Vous avez donc été retiré du serveur Discord de la division France.\nPour avoir de nouveau accès au serveur, utilisez le lien présent sur la page d'accuil du site de la division : https://www.ivao.fr").then(status => promises.push(status));
          await Bot.kickUser(discord_user, '[Auto Sync] Statuses do not match').then(status => promises.push(status));
          await Bot.storage.remove(discord_user).then(status => promises.push(status));
          await Bot.log(`[Auto Sync] Statuses of member ${discord_user.user_id} do not match (pending on website: ${discord_user.is_pending}, pending on server: ${member.pending}). Member is kicked.`);
        }
        if (update_necessary) {
          await Bot.storage.update(discord_user).then(status => promises.push(status));
        }
        return Promise.all(promises);
      })
      .catch(err => console.log(err));
  }));
}