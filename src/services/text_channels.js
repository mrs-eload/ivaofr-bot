const storage = require('../store/store')(process.env.STORAGE)
const client = require('../core/Bot')(storage);
const DiscordUser = require('../core/DiscordUser')
const bot = client.connect();
const Roles = require('./roles')()


bot.on('voiceStateUpdate', async (old, voice) => {
    const member  = old.member;
    const guild = old.guild;
    if (old.channel) {
        const oldTextName = `${old.channel.name.replace(' ', '-').toLowerCase()}-texte`;
        const oldTextChannel = guild.channels.cache.find(c => c.name === oldTextName);
        if (oldTextChannel) {
            await oldTextChannel.permissionOverwrites.delete(member);
        }
    }

    if (voice.channel) {
        const textName = `${voice.channel.name.replace(' ', '-').toLowerCase()}-texte`;
        const textChannel = guild.channels.cache.find(c => c.name === textName);
        if (textChannel) {
            await textChannel.permissionOverwrites.create(member, { VIEW_CHANNEL: true });
        }
    }
});