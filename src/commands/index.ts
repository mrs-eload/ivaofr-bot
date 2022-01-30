import { Bot } from "../core";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { fetchRoles } from "../services/roles";
import { find_member } from "./find_member";
import { server_info } from "./server_info";
import { check_channels } from "./admin";
import { CommandRegistration } from "./command.interface";

export * from './find_member'
const commands_map = new Map();


function storeCommand (factory: CommandRegistration){
  const command = factory.register();
  commands_map.set(command.name, {factory, command});
  return command
}

export const command_register = async () => {

  const client_id = process.env.CLIENT_ID;
  const guild_id = process.env.GUILD_ID;

  if(client_id && guild_id){

    const commands = [
      storeCommand(find_member),
      storeCommand(server_info),
      storeCommand(check_channels),
    ].map(command => command.toJSON());
    const global_permissions = [];
    let registered_commands = null;
    const rest = new REST({version: '9'}).setToken(process.env.BOT_TOKEN);
    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(
        Routes.applicationGuildCommands(client_id, guild_id),
        {body: commands},
      )
      .then((commands:any[]) => {
        registered_commands = commands;
        commands.forEach(async (command) => {
          const stored_command = commands_map.get(command.name);
          const roles = fetchRoles(Bot.guild)
          console.log(`Set permissions for command ${command.name}`);
          const permissions = stored_command.factory.getDefaultPermissions(roles);
          global_permissions.push({
            id: command.id,
            permissions
          })
        })
        return global_permissions
      })
      .then((permissions) => {
        return Bot.guild.commands.permissions.set({
          fullPermissions: permissions
        })
      });
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  }
}

export const command_reply = (bot) => {
  bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    await interaction.deferReply({ephemeral: true});
    const {commandName} = interaction;
    const command = commands_map.get(commandName)
    const response = await command.factory.execute(interaction)
    await interaction.editReply({embeds: [response]});
  });
}
