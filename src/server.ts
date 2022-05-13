import { text_to_voice } from "./services/text_channels";

if (!process.env.NODE_ENV) {
  console.error('No NODE_ENV provided!!')
  process.exit(1);
}
process.env.STORAGE = 'rest'

import * as path from 'path'
import * as dotenv from "dotenv"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"

const env_path = path.resolve(process.cwd(), 'config', process.env.NODE_ENV, '.env')
dotenv.config({path: env_path})


import * as store from "./store"


import { Bot } from "./core/Bot"

//Load bot modules
import {init as discord_auth} from "./services/discord_auth"
import {init as mod_logger } from "./services/moderation_logger"
import {syncUsers} from "./services/sync";
import { command_register, command_reply } from "./commands"


const bootstrap = async () => {

  const app = express();
// Choose storage method for bot data
  console.log(`Bot is starting...`)
  const storage = store.get(process.env.STORAGE)
  const client = Bot.storageSetup(storage);
  const bot = await client.connect();
  await command_register()
  await command_reply(bot)
  await discord_auth()
  await mod_logger()
  await text_to_voice()
  console.log(`Bot ready`)


  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(cors());
  app.listen(process.env.PORT || 8081)
  console.log(`Discord Bot API ready`)

  app.post('/user/delete', cors({origin: process.env.CORS_ORIGIN}), async (req, res, next) => {
    if (!Bot.guild) await Bot.connect();
    await Bot.whenReady();
    const query = req.body;
    if (query.discord_user) {
      await Bot.kickUser(query.discord_user, `Supprimé du site`)
        .then(success => res.send({success}))
    } else {
      res.sendStatus(400)
    }
  });

  app.post('/user/pm', cors({origin: process.env.CORS_ORIGIN}), async (req, res, next) => {
    if(!Bot.guild) await Bot.connect();
    await Bot.whenReady();

    const query = req.body;
    const user = query.discord_user
    const content = query.content;
    if (user) {
      await Bot.sendPrivateMessage(user, content)
        .then(success => res.send({success}))
    } else {
      res.sendStatus(400)
    }
  });

  app.post('/users/sync', cors({origin:process.env.CORS_ORIGIN}), async (req,res,next) => {
    if(!Bot.guild) await Bot.connect();
    await Bot.whenReady();
    const query = req.body;
    const users = query.discord_users;
    if (users) {
      const status = await syncUsers(users)
      res.send(status)
    } else {
      res.sendStatus(400)
    }
  });

  app.post('/status', cors({origin: process.env.CORS_ORIGIN}), async (req, res, next) => {
    let status = {online: false, reason: null}
    try {
      if (!Bot.guild) await Bot.connect();
      status = {...status, online: true}
    } catch (err) {
      status = {...status, online: false, reason: err}
    }
    res.send(status)
  });


}

bootstrap()