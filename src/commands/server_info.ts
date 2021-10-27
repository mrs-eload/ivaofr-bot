import { MessageEmbed } from "discord.js"
import { Bot } from "../core";


export const server_info_cmd = async () => {
  const response = new MessageEmbed()
  try{
    response.setColor("#14dc1e")
      .setTitle("Info serveur")
      .setDescription(`Membres: ${Bot.guild.memberCount}`)
  }catch(err){
    response
      .setColor("#DC143C")
      .setTitle("Nungesser a eu des problèmes!")
      .addField(`Erreur`, `${err.message}`)
  }
  return response;
}