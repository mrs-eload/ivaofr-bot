import {Bot} from "../core/Bot"
import { GuildMember } from "discord.js";

export const init = async () => {
  const bot = await Bot.connect();
  bot.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_KICK',
    });
    // Since there's only 1 audit log entry in this collection, grab the first one
    const kickLog = fetchedLogs.entries.first();

    // Perform a coherence check to make sure that there's *something*
    if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);

    // Now grab the user object of the person who kicked the member
    // Also grab the target of this action to double-check things
    const { executor, target } = kickLog;

    // Update the output with a bit more information
    // Also run a check to make sure that the log returned was for the same kicked member
    if (target instanceof GuildMember && target.id === member.id) {
      Bot.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
    }
  });


  bot.on('guildBanAdd', async ban => {
    const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_ADD',
    });
    // Since there's only 1 audit log entry in this collection, grab the first one
    const banLog = fetchedLogs.entries.first();

    // Perform a coherence check to make sure that there's *something*
    if (!banLog) return console.log(`${ban.user.tag} was banned from ${ban.guild.name} but no audit log could be found.`);

    // Now grab the user object of the person who banned the member
    // Also grab the target of this action to double-check things
    const { executor, target } = banLog;

    // Update the output with a bit more information
    // Also run a check to make sure that the log returned was for the same banned member
    if (target instanceof GuildMember && target.id === ban.user.id) {
      Bot.log(`${ban.user.tag} got hit with the swift hammer of justice in the guild ${ban.guild.name}, wielded by the mighty ${executor.tag}`);
    } else {
      console.log(`${ban.user.tag} got hit with the swift hammer of justice in the guild ${ban.guild.name}, audit log fetch was inconclusive.`);
    }
  });
  bot.on('messageDelete', async message => {
    // ignore direct messages
    if (!message.guild) return;
    const fetchedLogs = await message.guild.fetchAuditLogs({
      limit: 1,
      type: 'MESSAGE_DELETE',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const deletionLog = fetchedLogs.entries.first();

    // Let's perform a coherence check here and make sure we got *something*
    if (!deletionLog) return Bot.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

    // We now grab the user object of the person who deleted the message
    // Let us also grab the target of this action to double check things
    const {executor, target} = deletionLog;


    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same author's message
    if (target instanceof GuildMember && target.id === message.author.id) {
      Bot.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
      Bot.log(message.content)
    } else {
      Bot.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
    }
  });

}
