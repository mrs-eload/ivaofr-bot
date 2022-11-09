import { ApplicationCommandPermissions, ApplicationCommandPermissionType, EmbedBuilder, SlashCommandBuilder } from "discord.js"
import { Bot } from "../core";
import { CommandRegistration } from "./command.interface";
import { fetchRoles } from "../services/roles";

export const server_info: CommandRegistration = {
  register: function () {
    return new SlashCommandBuilder().setName('server')
      .setDescription('Afficher les informations du serveur')
      .setDefaultMemberPermissions(0)
  },
  execute: async function (interaction) {
    const response = new EmbedBuilder()
    const roles = await fetchRoles(Bot.guild, true)

    const report = `
      Total: ${Bot.guild.memberCount}
    `;

    try {
      response.setColor("#14dc1e")
        .setTitle("Info serveur")
        .setDescription(report)
    } catch (err) {
      response
        .setColor("#DC143C")
        .setTitle("Nungesser a eu des problèmes!")
        .addFields([{name: `Erreur`, value: `${err.message}`}])
    }
    return response;
  },
  getDefaultPermissions: function (roles): ApplicationCommandPermissions[] {
    return [{
      id: roles.staff_role.id,
      type: ApplicationCommandPermissionType.Role,
      permission: true,
    }];
  }
}