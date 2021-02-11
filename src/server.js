require('dotenv').config()
const nodefetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const client = require('./core/Bot');
const bot = client.connect()
const discord_auth = require('./services/discord_auth');
const mod_logger = require('./services/moderation_logger');

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

        if(ivao_member.discord_id){
            let user = await discord_auth.findUser(ivao_member.discord_id)
            if(user){
                inv.user = user
                return res.send(inv)
            }
        }

        client.createInvite({
            channel_name: process.env.INVITE_CHANNEL
        })
        .then((invite) => {
            inv  = { invite, ivao_member }
            client.saveInvite(inv)
            .then( () => res.send(inv))
        });
    }else{
        res.sendStatus(400);
    }
});




