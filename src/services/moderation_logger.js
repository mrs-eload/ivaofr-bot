const client = require('../core/Bot');
const bot = client.connect();

bot.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_KICK',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const kickLog = fetchedLogs.entries.first();

    // Let's perform a coherence check here and make sure we got *something*
    if (!kickLog) return client.log(`${member.user.tag} left the guild, most likely of their own will.`);

    // We now grab the user object of the person who kicked our member
    // Let us also grab the target of this action to double check things
    const { executor, target } = kickLog;

    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same kicked member
    if (target.id === member.id) {
        client.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
    } else {
        client.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`);
    }
});

bot.on('guildBanAdd', async (guild, user) => {
    const fetchedLogs = await guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD',
    });
    // Since we only have 1 audit log entry in this collection, we can simply grab the first one
    const banLog = fetchedLogs.entries.first();

    // Let's perform a coherence check here and make sure we got *something*
    if (!banLog) return client.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

    // We now grab the user object of the person who banned the user
    // Let us also grab the target of this action to double check things
    const { executor, target } = banLog;

    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same kicked member
    if (target.id === user.id) {
        client.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, wielded by the mighty ${executor.tag}`);
    } else {
        client.log(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}, audit log fetch was inconclusive.`);
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
    if (!deletionLog) return client.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

    // We now grab the user object of the person who deleted the message
    // Let us also grab the target of this action to double check things
    const { executor, target } = deletionLog;


    // And now we can update our output with a bit more information
    // We will also run a check to make sure the log we got was for the same author's message
    if (target.id === message.author.id) {
        client.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
        client.log(message.content)
    }	else {
        client.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
    }
});

module.exports = function(app){

    //other routes..
}