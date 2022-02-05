import { Guild, Role } from "discord.js";

export const reservedRoles = ['Nitro Booster', 'Server Booster', '@everyone'];

export const fetchRoles = async (guild: Guild, refresh = false): Promise<Record<string, Role>> => {

    if(refresh){
        await guild.roles.fetch()
    }
    return {
        staff_role: guild.roles.cache.find(role => role.name === 'staff'),
        anim_role: guild.roles.cache.find(role => role.name === 'animateur'),
        member_role: guild.roles.cache.find(role => role.name === 'membre'),
        va_role: guild.roles.cache.find(role => role.name === 'va'),
        fo_role: guild.roles.cache.find(role => role.name === 'fo'),
        wm_role: guild.roles.cache.find(role => role.name === 'wm'),
        pr_role: guild.roles.cache.find(role => role.name === 'pr'),
        externe_role: guild.roles.cache.find(role => role.name === 'externe'),
        admin_role: guild.roles.cache.find(role => role.name === 'admin'),
    }
}

export const memberHasRoleId = (member, role_id) => {
    const role = [...member.roles.cache.values()].find(role => role.id === role_id)
    return role !== undefined;
}

export const addRoles = async (member, roles) => {
    let promises = []
    roles.forEach(role => {
        if (!member.roles.cache.has(role.id)) promises.push(member.roles.add(role));
    })
    return Promise.all(promises)
}

export const removeRoles = async (member, roles) => {

    let promises = []
    roles.forEach(role => {
        if (member.roles.cache.has(role.id)) promises.push(member.roles.remove(role));
    })
    return Promise.all(promises)
}