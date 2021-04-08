const storage = require('../store/store')(process.env.STORAGE)
const client = require('../core/Bot')(storage);
const DiscordUser = require('../core/DiscordUser')
const bot = client.connect();

module.exports = () => {
    const fetchRoles = (guild) => {
        return {
            staff_role: guild.roles.cache.find(role => role.name === 'staff'),
            anim_role: guild.roles.cache.find(role => role.name === 'animateur'),
            member_role: guild.roles.cache.find(role => role.name === 'membre')
        }
    }

    return {
        fetchRoles
    }
}