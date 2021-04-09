module.exports = (bot) => {
    return {
        find_member: require('./find_member')(bot)
    }
}

