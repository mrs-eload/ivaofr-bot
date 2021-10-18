const Discord = require ('discord.js');
const DiscordUser = require('./DiscordUser')
class Bot {

    constructor(){
        if (!Bot.instance) {
            Bot.instance = this;
            Bot._cached_invites = new Map();
        }
        return Bot.instance;
    }

    static storageSetup(storage){
        Bot.storage = storage
        return Bot;
    }

    static findChannel(channel_name){
        return Bot.client.channels.cache.find(channel => {
            return channel.guild.id === process.env.GUILD_ID && channel.name === channel_name
        });
    }

    static async kickUser(opts, cause){
        const member = await Bot.guild.members.cache.get(opts.discord_id);

        if(member){
            return member.kick().then((member) => {
                const message = new Discord.MessageEmbed()
                    .setColor("#14dc1e")
                    .setTitle(`${member.nickname} s'envole vers d'autres cieux`)
                    .addField("Cause:", cause)
                const channel = Bot.findChannel("ivaofr-logs")
                channel.send({ embeds: [message] });
                return true
            })
        }else{
            return false;
        }

    }

    static createInvite(opts){
        const{channel_name} = opts;
        const channel = Bot.findChannel(channel_name);

        if(!channel) throw new Error(`Can't find channel ${channel_name}`)

        return channel.createInvite({
            temporary: false,
            unique:true,
            maxUses:2
        });
    }

    static async saveInvite(opts){
        const {invite, ivao_member} = opts;
        const discord_user = new DiscordUser({
            user_id: ivao_member.id,
            invite_code: invite.code,
            invite_url: invite.url,
            is_pending: true
        })
        await Bot.refresh_invites()
        return discord_user;
    }

    static async fetchInvites(guild_id){
        return guild_id.invites.fetch();
    }

    static async refresh_invites(){
        return Bot.guild.invites.fetch()
            .then(guildInvites => Bot.cached_invites.set(Bot.guild.id, guildInvites))
            .catch(err => console.log(err))
    }

    static connect (){
        if(!Bot.client){
            Bot.is_ready = false;
            Bot.client = new Discord.Client({
                intents: ['GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_INVITES', 'GUILDS', 'GUILD_MESSAGES'],
                fetchAllMembers: true
            })
            Bot.client.login(process.env.BOT_TOKEN)
                .then(async res => {
                    Bot.guild = Bot.client.guilds.cache.get(process.env.GUILD_ID)
                    await Bot.refresh_invites()
                    Bot.is_ready = true;
                })
                .catch(err => console.error(err))
        }
        return Bot.client;
    }

    static async whenReady() {
        return new Promise((resolve, reject) => {
            while (!Bot.is_ready){}
            resolve(true);
        })
    }

    static log (message){
        console.log(message);
        const log_chan = Bot.findChannel("ivaofr-logs")
        if(log_chan){
            log_chan.send(message.toString());
        }else{
            console.warn('No ivaofr-logs channel setup!');
        }
    }

    static async findDiscordUser (params){
        const discord_user = new DiscordUser(params)
        return await this.storage.find(discord_user)
            .then (result => result.json())
            .catch(err => { throw new Error(err) })
            .then (data => {
                if (data === null || data.status <= 404) {
                    console.error(`error with request`)
                    console.log(data)
                    throw new Error(`error with request`)
                }
                for (let key in data.response) {
                    discord_user[key] = data.response[key]
                }
                return discord_user;
            })
    }

    static set client(val){
        Bot._client = val;
    }
    static get client(){
        return Bot._client;
    }

    static set guild(val){
        if(!val) throw Error('Guild not found');
        else Bot._guild = val;
    }

    /**
     * @return {Guild}
     */
    static get guild(){
        return Bot._guild;
    }

    static get is_ready(){
        return Bot._is_ready;
    }

    static set is_ready(val){
        Bot._is_ready = val;
    }

    /**
     * @type Map
     * @param val
     */
    static set cached_invites(val){
        Bot._cached_invites.set(val);
    }

    /**
     * @returns {Map}
     */
    static get cached_invites(){
        return Bot._cached_invites;
    }
}

const bot = new Bot();
module.exports = (storage) => Bot.storageSetup(storage)