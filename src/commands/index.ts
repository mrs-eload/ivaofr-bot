import { REST, Role } from "discord.js";
import { Routes } from "discord-api-types/v9";
import { find_member } from "./find_member";
import { server_info } from "./server_info";
import { check_channels, clean } from "./admin";
import { CommandRegistration } from "./command.interface";
import { metar, taf } from "./weather";

export * from './find_member'
const commands_map = new Map();


async function storeCommand(factory: CommandRegistration) {
  const command = await factory.register();
  commands_map.set(command.name, {factory, command});
  return command
}
export const command_register = async () => {

  const client_id = process.env.CLIENT_ID;
  const guild_id = process.env.GUILD_ID;

  if (client_id && guild_id) {
    const commands = [
      await storeCommand(find_member),
      await storeCommand(server_info),
      await storeCommand(check_channels),
      await storeCommand(clean),
      await storeCommand(metar),
      await storeCommand(taf),
    ].map(command => command.toJSON());
    const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);
    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(
        Routes.applicationGuildCommands(client_id, guild_id),
        {body: commands},
      )
      .catch((error) => {
        console.error("Issue with commands registration", error);
      })
    } catch (error) {
      console.error(error);
    }
  }
}

export const command_reply = (bot) => {
  bot.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const {commandName} = interaction;
    const command = commands_map.get(commandName)
    if(commandName !== 'clean') await interaction.deferReply({ephemeral: true});
    const response = await command.factory.execute(interaction)
    if(commandName !== 'clean') await interaction.editReply({embeds: [response]});
  });
}
