import * as store from "../store"
import { MessageEmbed } from 'discord.js'
import { DiscordUser } from "../core";
import { SlashCommandBuilder } from "@discordjs/builders";

const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');

const storage = store.get(process.env.STORAGE)

export const find_member_cmd = async (interaction) => {

  const VIDRegex = new RegExp(/(\d{6})/)
  const TagRegex = new RegExp(/!!member\stag\s(.{3,32}#[0-9]{4})$/)
  const IdRegex = new RegExp(/(\d+)/)

  const findUser = async (discord_user, needle) => {
    return await storage.find(discord_user)
      .then(result => result.json())
      .then(data => {
        if (!data) throw new Error(`Can't find member ${needle}`);
        if (data.status >= 400) {
          throw new Error(`Server responded ${data.response}`)
        }
        if (data.response === null) {
          throw new Error(`Can't find discord attached to member ${needle}, maybe kick them?`)
        }

        for (let key in data.response) {
          discord_user[key] = data.response[key];
        }
        return discord_user;
      })
      .then(discord_user => {
        return new MessageEmbed()
          .setColor("#14dc1e")
          .setTitle("Nungesser a trouvé quelque chose!")
          .addField("VID:", `${discord_user.user_id}`)
          .addField("Discord ID:", `${discord_user.discord_id}`)
          .addField("Discord Tag:", `${discord_user.discord_tag}`)
          .addField("Pseudo:", `${discord_user.nickname}`)
          .addField("A accepté les règles?", `${(discord_user.is_active) ? 'Oui' : 'Non'}`)
      }).catch(err => {
        return new MessageEmbed()
          .setColor("#DC143C")
          .setTitle("Nungesser a eu des problèmes!")
          .addField(`Erreur`, `${err.message}`)
      })
  }
  let vid = interaction.options.get('vid')
  let discord_id = interaction.options.get('discord_id')
  let response = new MessageEmbed()

  try {
    if(vid){
      let match = VIDRegex.exec(vid.value);
      if (match && match[1]) {
        const discord_user = new DiscordUser({
          user_id: parseInt(match[1])
        })
        response = await findUser(discord_user, match[1]);
      }else{
        throw new Error("Verifiez la longueur du VID")
      }
    }else if(discord_id){
      let match = IdRegex.exec(discord_id.value);
      if (match && match[1]) {
        const discord_user = new DiscordUser({
          discord_id: parseInt(match[1])
        })
        response = await findUser(discord_user, match[1]);
      }
    }else{
      throw new Error("Vérifiez l'option")
    }
  }catch(err){
    console.log(err)
      response.setColor("#DC143C")
      .setTitle("Makemake a eu des problèmes!")
      .addField(`Erreur`, `${err.message}`)
    return response;
  }
  return response;
}