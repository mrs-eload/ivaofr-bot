import {  MessageEmbed } from "discord.js";
import { checkChannels, cleanChannel } from "../services/text_channels";
import { CommandRegistration } from "./command.interface";
import { SlashCommandBuilder } from "@discordjs/builders";

export const check_channels: CommandRegistration = {
  register: function(){
    return new SlashCommandBuilder().setName('check_channels')
      .setDescription('Check all channels and reset permissions')
      .setDefaultMemberPermissions(0)
  },
  execute: async function (){
    const response = new MessageEmbed()
    try{
      await checkChannels();
      response.setColor("#14dc1e")
        .setTitle("Channels updated")
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
      id: roles.wm_role.id,
      type: 'ROLE',
      permission: true,
    },
    {
      id: roles.admin_role.id,
      type: 'ROLE',
      permission: true,
    }];
  }
}

export const clean: CommandRegistration = {
  register: function(){
    return new SlashCommandBuilder().setName('clean')
      .setDescription('Clean channel content')
      .setDefaultMemberPermissions(0)
  },
  execute: async function (interaction){
    const response = new MessageEmbed()
    try{
      if(interaction.channel.type === "GUILD_TEXT"){
        interaction.channel = await cleanChannel(interaction.channel);
      }else{
        response.setColor("#DC143C")
          .setTitle("Nungesser ne peut pas supprimer des messages ici")
      }
      response.setColor("#14dc1e")
        .setTitle("Messages supprimés")
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
      id: roles.wm_role.id,
      type: 'ROLE',
      permission: true,
    },
      {
        id: roles.admin_role.id,
        type: 'ROLE',
        permission: true,
      }];
  }
}