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

    const addRoles = async (member, roles) => {

        let promises = []
        roles.forEach( role => {
            if(!member.roles.cache.has(role.id)) promises.push(member.roles.add(role));
        })
       return Promise.all(promises)
    }

    return {
        fetchRoles,
        addRoles
    }
}