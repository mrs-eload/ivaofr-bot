if(!process.env.NODE_ENV){
    console.error('No NODE_ENV provided!!')
    process.exit(1);
    return
}


const path = require('path')
const env_path = path.resolve(process.cwd(), 'config', process.env.NODE_ENV, '.env')

require('dotenv').config({path:env_path})

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

// Choose storage method for bot data
const storage = require('./store/store')(process.env.STORAGE)
const client = require('./core/Bot')(storage);
const DiscordUser = require('./core/DiscordUser')
const bot = client.connect()
const Roles = require('./services/roles')()


//Load bot modules
const discord_auth = require('./services/discord_auth');
const mod_logger = require('./services/moderation_logger');
const commands = require('./commands')(bot);
const text_channels = require('./services/text_channels');

bot.on('ready', async () => {
    console.log("Je suis connecté !")
    bot.is_ready = true;
});

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors());
app.listen(process.env.PORT || 8081)

app.use('/', express.static(__dirname + '/../public'));

app.post('/invite', cors({origin:process.env.CORS_ORIGIN}), async (req,res,next) => {
    if(!bot.guild) client.connect();
    await client.whenReady();
    const query = req.body;
    const ivao_member = query.user;
    let inv  = { invite:undefined, user:undefined };
    if(ivao_member){
        client.createInvite({
            channel_name: process.env.INVITE_CHANNEL
        })
        .then((invite) => {
            inv  = { invite, ivao_member }
            client.saveInvite(inv).then( (discord_user) => {
                res.send(discord_user)
            }).catch((err) => res.send(err))
        });
    }else{
        res.sendStatus(400);
    }
});

app.post('/user/delete', cors({origin:process.env.CORS_ORIGIN}), async (req,res,next) => {
    if(!bot.guild) client.connect();
    await client.whenReady();
    const query = req.body;
    if(query.discord_user){
        await client.kickUser(query.discord_user, `Supprimé du site`)
        .then(success => res.send({ success }))
    }else{
        res.sendStatus(400)
    }
});

app.post('/users/sync', cors({origin:process.env.CORS_ORIGIN}), async (req,res,next) => {
    if(!bot.guild) client.connect();
    await client.whenReady();
    const query = req.body;
    const users = query.discord_users;
    if (users) {
        const guild = client.guild;
        const status = await Promise.all(users.filter(u => u.discord_id !== null ).map( async user => {
            const discord_user = new DiscordUser(user);
            await guild.members.fetch(discord_user.discord_id)
                .then(async member => {
                    let promises = [];
                    let update_necessary = false;
                    if (discord_user.is_pending === member.pending) {
                        // Check for any discord tag change
                        if (discord_user.discord_tag !== member.user.tag) {
                            update_necessary = true;
                            discord_user.discord_tag = member.user.tag
                        }

                        // Check discord member elements

                        if (discord_user.is_active && discord_user.nickname !== member.nickname) {
                            await member.setNickname(discord_user.nickname)
                                .then(status => {
                                    promises.push(status);
                                    client.log(`[Auto Sync] Nickname of member ${discord_user.user_id} successfully updated to : "${discord_user.nickname}".`);
                            })
                                .catch(err => console.log(err));
                        }
                        const roles = Roles.fetchRoles(client.guild);
                        const expectedRoles = discord_user.expectedRoles(roles);
                        const expectedRolesNames = expectedRoles.map(r => r.name);
                        const rolesToRemove = member.roles.cache.filter(r => {
                            return r.name !== '@everyone' && r.name !== 'admin' && !expectedRolesNames.includes(r.name);
                        });

                        await Roles.addRoles(member, expectedRoles).then(status => promises.push(status));
                        await Roles.removeRoles(member, rolesToRemove).then(status => promises.push(status));
                    } else {
                        // Pending status do not match
                        await member.send("Un problème de statuts a été détecté sur votre compte. Vous avez donc été retiré du serveur Discord de la division France.\nPour avoir de nouveau accès au serveur, utilisez le lien présent sur la page d'accuil du site de la division : https://www.ivao.fr").then(status => promises.push(status));
                        await client.kickUser(discord_user, '[Auto Sync] Statuses do not match').then(status => promises.push(status));
                        await storage.remove(discord_user).then(status => promises.push(status));
                        await client.log(`[Auto Sync] Statuses of member ${discord_user.user_id} do not match (pending on website: ${discord_user.pending}, pending on server: ${member.pending}). Member is kicked.`);
                    }
                    if (update_necessary) {
                        await storage.update(discord_user).then(status => promises.push(status));
                    }
                    return Promise.all(promises);
                })
                .catch(err => console.log(err));
        }));
        res.send(status)
    } else {
        res.sendStatus(400)
    }
});


app.post('/status', cors({origin:process.env.CORS_ORIGIN}), async (req,res,next) => {
    let status = {online: false, reason: null}
    try{
        if(!bot.guild) client.connect();
        await client.whenReady();
        status = {...status,online: true}
    }catch(err){
        status = {...status, online: false, reason: err}
    }
    res.send(status)
});


