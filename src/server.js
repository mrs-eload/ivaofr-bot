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
const bot = client.connect()


//Load bot modules
const discord_auth = require('./services/discord_auth');
const mod_logger = require('./services/moderation_logger');
const commands = require('./commands')(bot);

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


