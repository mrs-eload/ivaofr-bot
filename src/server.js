const Discord = require ('discord.js');
const nodefetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

const bot = new Discord.Client({fetchAllMembers:true});
const invites = {};
bot.on('ready', function () {
    console.log("Je suis connecté !");
    setTimeout(() => {
        bot.guilds.cache.each(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
            });
        });
    },0)

});

bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong !');
    }
});

bot.login(process.env.BOT_TOKEN);

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors());
app.listen(process.env.PORT || 8081)

app.use('/', express.static(__dirname + '/../public'));

app.post('/login', cors({origin:'*'}), (req,res,next) => {
    const query = req.body;
    nodefetch(`https://login.ivao.aero/api.php?type=json&token=${query.token}`,{ method: 'POST'})
        .then(res => res.json()) // expecting a json response
        .then(json => {
            console.log(json);
            const chan = bot.channels.cache.find(channel => channel.name === 'accueil');
            const invite = chan.createInvite({
                temporary: true,
                unique:true,
                maxUses:1
            }).then((invite) => {
                res.send({
                    invite,
                    ivao_user: json
                })
            });
        })
        .catch(error => res.end(error));
});

app.post('/user', cors({origin: '*'}), (req,res,next) => {
    const query = req.body;
    let {username,member} = query;
    member = JSON.parse(member);
    const guild = bot.guilds.cache.find(g => member.guildID === g.id);
    const guild_member = guild.member(member.userID);
    const chan = bot.channels.cache.find(channel => channel.name === 'accueil');
    chan.send(`Hello ${guild_member.displayName}!`);
    const member_role = guild.roles.cache.find(r => r.name === "IVAO Member");
    guild_member.setNickname(username).then(() => {
        chan.send(`Ton pseudo est maintenant ${username}!`);
        guild_member.roles.add(member_role);
        chan.send(`Tu as été ajouté au groupe ${member_role.name}!`);
    });
});
