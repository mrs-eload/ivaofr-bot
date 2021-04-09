require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const nodefetch = require('node-fetch')
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

app.post('/invite', cors({origin:'*'}), async (req,res,next) => {
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




