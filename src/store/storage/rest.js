const fetch = require('node-fetch')
const token =  process.env.WEBSITE_DISCORD_API_TOKEN;

module.exports = {
    save: async (discord_user) => {
        return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: discord_user,
                token
            }),

        })
    },

    find: async (discord_user) => {
        return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/find`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: discord_user,
                token
            }),
        })
    },

    update: async (discord_user) => {
        return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/update`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: discord_user,
                token
            }),
        })
    },

    remove: async (discord_user) => {
        return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/remove`, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: discord_user,
                token
            }),
        })
    },

    ping: async () => {
        return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/ping`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token
            }),
        })
    }

}