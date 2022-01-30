import { MessageEmbed } from "discord.js"
import { Bot } from "../core";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandRegistration } from "./command.interface";

export const server_info: CommandRegistration = {
  register: function() {
    return new SlashCommandBuilder().setName('server')
      .setDescription('Afficher les informations du serveur')
      .setDefaultPermission(false)
  },
  execute: function(){
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
  },
  getDefaultPermissions: function(roles){
    return [{
      id: roles.staff_role.id,
      type: 'ROLE',
      permission: true,
    }];
  }
}