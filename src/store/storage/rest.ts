import fetch from "node-fetch"
const token =  process.env.WEBSITE_DISCORD_API_TOKEN;


export const save = async (discord_user) => {
    return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: discord_user,
            token
        }),

    })
}

export const find = async (discord_user) => {
    return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/find`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: discord_user,
            token
        }),
    })
}

export const update = async (discord_user) => {
    return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/update`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: discord_user,
            token
        }),
    })
}

export const remove = async (discord_user) => {
    return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/user/remove`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: discord_user,
            token
        }),
    })
}

export const ping = async () => {
    return fetch(`${process.env.WEBSITE_DISCORD_API_URL}/discord/ping`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            token
        }),
    })
}