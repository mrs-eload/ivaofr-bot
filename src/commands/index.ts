import { Bot } from "../core";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { fetchRoles } from "../services/roles";
import { find_member_cmd } from "./find_member";
import { server_info_cmd } from "./server_info";

export * from './find_member'

export const command_register = async () => {
  const commands = [
    new SlashCommandBuilder().setName('ping')
      .setDescription('Replies with pong!')
      .setDefaultPermission(false),
    new SlashCommandBuilder().setName('server')
      .setDescription('Afficher les informations du serveur')
      .setDefaultPermission(false),
    new SlashCommandBuilder().setName('user')
      .setDescription('user [vid]')
      .setDefaultPermission(false)
      .addNumberOption(option => option.setName('vid').setDescription('Chercher par VID'))
      .addNumberOption(option => option.setName('discord_id').setDescription('Chercher par Discord ID'))
  ].map(command => command.toJSON());

  const client_id = process.env.CLIENT_ID;
  const guild_id = process.env.GUILD_ID;
  let registered_commands = null;
  const rest = new REST({version: '9'}).setToken(process.env.BOT_TOKEN);
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(
      Routes.applicationGuildCommands(client_id, guild_id),
      {body: commands},
    ).then(commands => {
      registered_commands = commands;
    });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  const roles = fetchRoles(Bot.guild)
  const global_permissions = []

  for (const command of registered_commands) {
    global_permissions.push({
      id: command.id,
      permissions: [{
        id: roles.staff_role.id,
        type: 'ROLE',
        permission: true,
      }]
    })
  }

  await Bot.guild.commands.permissions.set({
    fullPermissions: global_permissions
  })
  .then(console.log)
  .catch(console.error);
}

export const command_reply = (bot) => {
  bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    await interaction.deferReply({ephemeral: true});
    const {commandName} = interaction;
    if (commandName === 'server') {
      const response = await server_info_cmd()
      await interaction.editReply({embeds: [response]});
    } else if (commandName === 'user') {
      const response = await find_member_cmd(interaction)
      await interaction.editReply({embeds: [response]});
    }
  });
}
