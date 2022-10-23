import { MessageEmbed } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandRegistration } from "./command.interface";
import fetch from "node-fetch";
const icao_metar = [];
const icao_taf = [];
const metar_url = 'https://tgftp.nws.noaa.gov/data/observations/metar/stations';
const taf_url = 'https://tgftp.nws.noaa.gov/data/forecasts/taf/stations';

export const metar: CommandRegistration = {
  register: async function () {
    const request = await fetch(`${metar_url}`);
    const response = await request.text();
    const lines = response.split("\n");
    lines.forEach(line => {
      const regex = new RegExp('>([A-Z]{4}).TXT<');
      const match = line.match(regex);
      if(match !== null) {
        icao_metar.push(match[1]);
      }
    });
    return new SlashCommandBuilder().setName('metar')
      .setDescription('Récupérer le METAR de la station')
      .setDefaultMemberPermissions(0)
      .addStringOption(option => option.setName('icao').setDescription('Code ICAO de la station').setRequired(true))
  },
  execute: async function (interaction) {
    const input = interaction.options.get('icao');
    const response = new MessageEmbed()
    const icao = input.value.toUpperCase();
    if(!icao_metar.includes(icao)){
      response.setTitle('La station n\'existe pas')
      response.setColor('#ff0000')
      return response
    }
    const request = await fetch(`${metar_url}/${icao}.TXT`);
    if(request.status == 404){
      response.setTitle('La station n\'existe pas')
      response.setColor('#ff0000')
      return response
    }

    if(request.status >= 400){
      response.setTitle('Erreur')
      response.setDescription('Impossible de recuperer le METAR pour le moment')
      response.setColor('#ff0000')
      return response;
    }

    const metar = await request.text();
    const report = `
      ${metar.split("\n").slice(1).join("\n").trim()}
    `;
    try {
      response.setColor("#14dc1e")
        .setTitle(`METAR ${icao}`)
        .setDescription(report)
    } catch (err) {
      response
        .setColor("#DC143C")
        .setTitle("Nungesser a eu des problèmes!")
        .addField(`Erreur`, `${err.message}`)
    }
    return response;
  },
  getDefaultPermissions: function (roles) {
    return [{
      id: roles.member_role.id,
      type: 'ROLE',
      permission: true,
    }];
  }
}

export const taf: CommandRegistration = {
  register: async function () {
    const request = await fetch(`${taf_url}`);
    const response = await request.text();
    const lines = response.split("\n");
    lines.forEach(line => {
      const regex = new RegExp('>([A-Z]{4}).TXT<');
      const match = line.match(regex);
      if(match !== null) {
        icao_taf.push(match[1]);
      }
    });
    return new SlashCommandBuilder().setName('taf')
      .setDescription('Récupérer le METAR de la station')
      .setDefaultMemberPermissions(0)
      .addStringOption(option => option.setName('icao').setDescription('Code ICAO de la station').setRequired(true))
  },
  execute: async function (interaction) {
    const input = interaction.options.get('icao')
    const response = new MessageEmbed()
    const icao = input.value.toUpperCase();
    if(!icao_taf.includes(icao)){
      response.setTitle('La station n\'existe pas')
      response.setColor('#ff0000')
      return response
    }
    const request = await fetch(`${taf_url}/${icao}.TXT`);
    if(request.status == 404){
      response.setTitle('La station n\'existe pas')
      response.setColor('#ff0000')
      return response
    }

    if(request.status >= 400){
      response.setTitle('Erreur')
      response.setDescription('Impossible de recuperer le TAF pour le moment')
      response.setColor('#ff0000')
      return response;
    }

    const taf = await request.text();
    const report = `
      ${taf.split("\n").slice(1).join("\n").trim()}
    `;
    try {
      response.setColor("#14dc1e")
        .setTitle(`TAF ${icao}`)
        .setDescription(report)
    } catch (err) {
      response
        .setColor("#DC143C")
        .setTitle("Nungesser a eu des problèmes!")
        .addField(`Erreur`, `${err.message}`)
    }
    return response;
  },
  getDefaultPermissions: function (roles) {
    return [{
      id: roles.member_role.id,
      type: 'ROLE',
      permission: true,
    }];
  }
}