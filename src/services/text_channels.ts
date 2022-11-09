import { Bot } from '../core'
import {
  ChannelType,
  GuildChannel,
   NonThreadGuildBasedChannel, PermissionFlagsBits,
  TextChannel,
} from "discord.js";
import { fetchRoles, memberHasRoleId } from "./roles";
import { MapToRecord } from "../core/utils";


export async function cleanChannel (channel: TextChannel){
  const new_channel = await channel.clone()
  await channel.delete();
  return new_channel;
}

export const checkChannels = async () => {
  await Bot.connect();

  const channels = await Bot.guild.channels.fetch();
  const voice_channels = [...channels.values()].filter(channel => channel?.type === ChannelType.GuildVoice)
  const text_channels = [...channels.values()].filter(channel => channel?.type === ChannelType.GuildText)
  const roles = await fetchRoles(Bot.guild, true)

  for (const channel of voice_channels) {
    const text_eq = voiceChannelNameToTxt(channel.name);
    const txt_channel = text_channels.find(txt_channel => text_eq === txt_channel.name);
    const channel_permissions = await getCommonChannelPermissions(channel, roles);

    if (!txt_channel) {
      await Bot.guild.channels.create({
        name: text_eq,
        type: ChannelType.GuildText,
        position: (channel.position > 0) ? channel.position - 1 : 0,
        parent: channel.parent,
        permissionOverwrites: channel_permissions,
      })
      console.log(`Channel ${text_eq} created`)
    }else{
      await txt_channel.permissionOverwrites.set(channel_permissions);
    }
  }
}
async function getCommonChannelPermissions(channel: NonThreadGuildBasedChannel, roles){

  const everyone_role = Bot.guild.roles.cache.find(role => role.name === '@everyone');

  const common_permissions = [
    PermissionFlagsBits.ViewChannel,
    PermissionFlagsBits.SendMessages,
    PermissionFlagsBits.SendTTSMessages,
    PermissionFlagsBits.AddReactions,
    PermissionFlagsBits.AttachFiles,
    PermissionFlagsBits.CreatePublicThreads,
    PermissionFlagsBits.SendMessagesInThreads,
    PermissionFlagsBits.EmbedLinks,
    PermissionFlagsBits.UseApplicationCommands,
    PermissionFlagsBits.ReadMessageHistory,
    PermissionFlagsBits.UseEmbeddedActivities,
  ];

  if(channel.parent?.name.toLowerCase().indexOf('training') > -1){
    common_permissions.pop();
  }

  return [
    {
      id: everyone_role.id,
      deny: common_permissions,
    },
    {
      id: roles.member_role.id,
      deny: common_permissions,
    },
    {
      id: roles.staff_role.id,
      deny: common_permissions,
    }
  ]
}

const voiceChannelNameToTxt = (channel_name) => {
  return `${channel_name.replace(/\s+/g, '-').replace(/'|"/g, '').toLowerCase()}-texte`;
}

export const text_to_voice = async () => {
  const bot = await Bot.connect();
  const roles = await fetchRoles(Bot.guild)
  await checkChannels()
  bot.on('voiceStateUpdate', async (old, voice) => {

    const member = old.member;
    const guild = old.guild;

    if (old.channel !== voice.channel) {
      if (old.channel) {
        const oldTextName = voiceChannelNameToTxt(old.channel.name);
        const oldTextChannel: GuildChannel = <GuildChannel>guild.channels.cache.find(c => c.name === oldTextName);
        if (oldTextChannel) {
          await oldTextChannel.permissionOverwrites.delete(member);
        }
      }

      if (voice.channel) {
        const textName = voiceChannelNameToTxt(voice.channel.name);
        const textChannel: GuildChannel = <GuildChannel>guild.channels.cache.find(c => c.name === textName);

        if (textChannel) {

          const textChannelPermissions = new Map();
          textChannelPermissions.set(PermissionFlagsBits.ViewChannel, true);
          textChannelPermissions.set(PermissionFlagsBits.SendMessages, true);
          textChannelPermissions.set(PermissionFlagsBits.SendTTSMessages, true);
          textChannelPermissions.set(PermissionFlagsBits.AddReactions, true);
          textChannelPermissions.set(PermissionFlagsBits.AttachFiles, true);
          textChannelPermissions.set(PermissionFlagsBits.CreatePublicThreads, true);
          textChannelPermissions.set(PermissionFlagsBits.SendMessagesInThreads, true);
          textChannelPermissions.set(PermissionFlagsBits.EmbedLinks, true);
          textChannelPermissions.set(PermissionFlagsBits.ReadMessageHistory, false);
          textChannelPermissions.set(PermissionFlagsBits.UseApplicationCommands, true);

          if(textChannel.parent.name.toLowerCase().indexOf('training') === -1){
            textChannelPermissions.set(PermissionFlagsBits.ReadMessageHistory, memberHasRoleId(member, roles.staff_role.id));
          }

          const permission_map = MapToRecord(textChannelPermissions);
          await textChannel.permissionOverwrites.create(member, permission_map);
        }
      }
    }
  });
}
