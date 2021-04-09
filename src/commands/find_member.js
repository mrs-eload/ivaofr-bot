const Discord = require ('discord.js');
const storage = require('../store/store')(process.env.STORAGE)
const DiscordUser = require('../core/DiscordUser')

module.exports = (bot) => {

    const VIDRegex = new RegExp(/(\d{6})/)
    const TagRegex = new RegExp(/!member\stag\s(.{3,32}#[0-9]{4})$/)
    const IdRegex = new RegExp(/(\d+)/)

    const allowed_channels = (message) => (message.channel.name === 'ivaofr-logs' || message.channel.name === 'moderator-only')
    const findUser = async (discord_user, needle) => {
        return await storage.find(discord_user)
            .then(result => result.json())
            .then(data => {
                if(!data) throw new Error(`Can't find member ${needle}`);
                if(data.status >= 400){
                    throw new Error(`Server responded ${data.response}`)
                }
                if(data.response === null){
                    throw new Error(`Can't find discord attached to member ${needle}, maybe kick them?`)
                }

                for(let key in data.response){
                    discord_user[key]= data.response[key];
                }
                return discord_user;
            })
            .then(discord_user => {
                return new Discord.MessageEmbed()
                    .setColor("#14dc1e")
                    .setTitle("Makemake a trouvé quelque chose!")
                    .addField("VID:", `${discord_user.user_id}`)
                    .addField("Discord ID:", `${discord_user.discord_id}`)
                    .addField("Discord Tag:", `${discord_user.discord_tag}`)
                    .addField("Pseudo:", `${discord_user.nickname}`)
                    .addField("A accepté les règles?", `${(discord_user.is_active) ? 'Oui': 'Non'}`)
            }).catch(err => {
                return new Discord.MessageEmbed()
                    .setColor("#DC143C")
                    .setTitle("Makemake a eu des problèmes!")
                    .addField(`Erreur`, `${err.message}`)
            })
    }

    bot.on('message', async (message) => {
        if (message.guild.id !== process.env.GUILD_ID) return;
        message.content = message.content.trim();

        if (message.content.search(/^!member\svid\?{0,1}\s\d{6}$/) > -1 && allowed_channels(message)) {
            let match = VIDRegex.exec(message.content);
            if(match[1]){
                const discord_user = new DiscordUser({
                    user_id: parseInt(match[1])
                })
                const response = await findUser(discord_user, match[1]);
                message.channel.send(response)
            }
        }

        if (message.content.search(/^!member\stag\?{0,1}\s.{3,32}#[0-9]{4}$/) > -1 && allowed_channels(message)) {
            let match = TagRegex.exec(message.content);
            if(match[1]){
                const discord_user = new DiscordUser({
                    discord_tag: match[1]
                })
                const response = await findUser(discord_user, match[1]);
                message.channel.send(response)
            }
        }

        if (message.content.search(/^!member\sid\?{0,1}\s.{3,32}#[0-9]{4}$/) > -1 && allowed_channels(message)) {
            let match = IdRegex.exec(message.content);
            if(match[1]){
                const discord_user = new DiscordUser({
                    discord_id: match[1]
                })
                const response = await findUser(discord_user, match[1]);
                message.channel.send(response)
            }
        }
    });

    return this
}