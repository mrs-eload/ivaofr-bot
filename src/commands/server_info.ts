import { MessageEmbed } from "discord.js"
import { Bot } from "../core";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandRegistration } from "./command.interface";
import { fetchRoles } from "../services/roles";

export const server_info: CommandRegistration = {
  register: function () {
    return new SlashCommandBuilder().setName('server')
      .setDescription('Afficher les informations du serveur')
      .setDefaultMemberPermissions(0)
  },
  execute: async function (interaction) {
    const response = new MessageEmbed()
    const roles = await fetchRoles(Bot.guild, true)
    const members = roles.member_role.members.filter((member) => {
      const is_staff = member.roles.resolve(roles.staff_role.id)
      const is_anim = member.roles.resolve(roles.anim_role.id)
      return is_staff === null && is_anim === null;
    })

    const report = `
      Total: ${Bot.guild.memberCount}
      Staff: ${roles.staff_role.members.size}
      Membres: ${members.size}
      Animateurs: ${roles.anim_role.members.size}
    `;

    try {
      response.setColor("#14dc1e")
        .setTitle("Info serveur")
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
      id: roles.staff_role.id,
      type: 'ROLE',
      permission: true,
    }];
  }
}