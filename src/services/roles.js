const storage = require('../store/store')(process.env.STORAGE)
const client = require('../core/Bot')(storage);
const DiscordUser = require('../core/DiscordUser')
const bot = client.connect();

module.exports = () => {
    const fetchRoles = (guild) => {
        return {
            staff_role: guild.roles.cache.find(role => role.name === 'staff'),
            anim_role: guild.roles.cache.find(role => role.name === 'animateur'),
            member_role: guild.roles.cache.find(role => role.name === 'membre'),
            va_role: guild.roles.cache.find(role => role.name === 'va'),
            fo_role: guild.roles.cache.find(role => role.name === 'fo'),
            wm_role: guild.roles.cache.find(role => role.name === 'wm')
        }
    }

    const addRoles = async (member, roles) => {

        let promises = []
        roles.forEach(role => {
            if (!member.roles.cache.has(role.id)) promises.push(member.roles.add(role));
        })
        return Promise.all(promises)
    }

    const removeRoles = async (member, roles) => {

        let promises = []
        roles.forEach(role => {
            if (member.roles.cache.has(role.id)) promises.push(member.roles.remove(role));
        })
        return Promise.all(promises)
    }

    return {
        fetchRoles,
        addRoles,
        removeRoles
    }
}