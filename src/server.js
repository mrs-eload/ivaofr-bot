const Discord = require ('discord.js');
const nodefetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

const redisCli = require("redis");
const redis = redisCli.createClient(process.env.REDIS_URL);

const bot = new Discord.Client({fetchAllMembers:true});
const invites = {};
const guild_invites = new Map();

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.guilds.cache.each(g => {
        g.fetchInvites()
            .then(guildInvites => guild_invites.set(g.id, guildInvites))
            .catch(err => console.log(err))
    })
})

bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.reply('pong !');
    }
});

bot.on('guildMemberAdd', async (member) => {
    const cached_invites = guild_invites.get(member.guild.id)
    const new_invites = await member.guild.fetchInvites()

    //Refresh cache
    guild_invites.set(member.guild.id, new_invites)

    //Find used invite
    const used_invite = new_invites.find( invite => cached_invites.get(invite.code).uses < invite.uses)


    if(used_invite && used_invite.inviter.username === 'IVAOFR'){
        redis.hgetall(used_invite.code, (err, ivao_user) => {
            if(err) throw err;
            let username = `${ivao_user.name} - ${ivao_user.vid}`;
            let staff_role = member.guild.roles.cache.find(role => role.name === 'staff')
            let member_role = member.guild.roles.cache.find(role => role.name === 'membre')

            member.setNickname(username);
            if(ivao_user.staff && ivao_user.staff.length > 0){
                member.roles.add(staff_role);
            }else{
                member.roles.add(member_role);
            }
            redis.del(used_invite.code, (err, ivao_user) => {
               if(err) throw err;
            });
            used_invite.delete().then(result => console.log(result)).catch(err => console.log(err));
            console.log(`${member.user.tag} joined using invite code ${used_invite.code} from ${used_invite.tag}. Invite was used ${used_invite.uses} times since its creation.`);
        })
        //Get info from Redis
    }
});

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
                maxUses:2,
                reason: `Invite member ${json.vid}`
        })
        .then((invite) => {
            bot.guilds.cache.each(g => {
                g.fetchInvites()
                    .then(guildInvites => guild_invites.set(g.id, guildInvites))
                    .catch(err => console.log(err))
            })
            //Stockage Redis
            redis.hmset(invite.code,
                "vid",json.vid,
                "name", `${json.firstname} ${json.lastname}`,
                "code", invite.code,
                "staff", json.staff)
            res.send({
                invite,
                ivao_user: json
            })
        });
    }).catch(error => res.end(error));
});
