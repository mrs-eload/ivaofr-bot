import { Bot } from '../core'
import {
  CategoryChannel,
  GuildChannel,
  NewsChannel,
  Permissions, StageChannel, StoreChannel,
  TextChannel,
  VoiceChannel
} from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { fetchRoles, memberHasRoleId } from "./roles";


export async function cleanChannel (channel: TextChannel){
  const new_channel = await channel.clone()
  await channel.delete();
  return new_channel;
}

export const checkChannels = async () => {
  await Bot.connect();

  const channels = await Bot.guild.channels.fetch();
  const voice_channels = [...channels.values()].filter(channel => channel.type === 'GUILD_VOICE')
  const text_channels = [...channels.values()].filter(channel => channel.type === 'GUILD_TEXT')
  const roles = await fetchRoles(Bot.guild, true)

  for (const channel of voice_channels) {
    const text_eq = voiceChannelNameToTxt(channel.name);
    const txt_channel = text_channels.find(txt_channel => text_eq === txt_channel.name);
    const channel_permissions = await getCommonChannelPermissions(channel, roles);

    if (!txt_channel) {
      await Bot.guild.channels.create(text_eq, {
        position: (channel.position > 0) ? channel.position - 1 : 0,
        parent: channel.parentId,
        type: ChannelTypes.GUILD_TEXT,
        permissionOverwrites: channel_permissions,
      });
      console.log(`Channel ${text_eq} created`)
    }else{
      await txt_channel.permissionOverwrites.set(channel_permissions);
    }
  }
}

async function getCommonChannelPermissions(channel: TextChannel | VoiceChannel | CategoryChannel | NewsChannel | StoreChannel | StageChannel, roles){

  const everyone_role = Bot.guild.roles.cache.find(role => role.name === '@everyone');

  const common_permissions = [
    Permissions.FLAGS.VIEW_CHANNEL,
    Permissions.FLAGS.SEND_MESSAGES,
    Permissions.FLAGS.SEND_TTS_MESSAGES,
    Permissions.FLAGS.ADD_REACTIONS,
    Permissions.FLAGS.ATTACH_FILES,
    Permissions.FLAGS.USE_PUBLIC_THREADS,
    Permissions.FLAGS.CREATE_PUBLIC_THREADS,
    Permissions.FLAGS.SEND_MESSAGES_IN_THREADS,
    Permissions.FLAGS.EMBED_LINKS,
    Permissions.FLAGS.READ_MESSAGE_HISTORY
  ];

  if(channel.parent.name.toLowerCase().indexOf('training') > -1){
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
          if(textChannel.parent.name.toLowerCase().indexOf('training') > -1){
            await textChannel.permissionOverwrites.create(member, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              SEND_TTS_MESSAGES: true,
              ADD_REACTIONS: true,
              ATTACH_FILES: true,
              USE_PUBLIC_THREADS: true,
              CREATE_PUBLIC_THREADS: true,
              SEND_MESSAGES_IN_THREADS: true,
              EMBED_LINKS: true,
              READ_MESSAGE_HISTORY: false,
            });
          }else{
            await textChannel.permissionOverwrites.create(member, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true,
              SEND_TTS_MESSAGES: true,
              ADD_REACTIONS: true,
              ATTACH_FILES: true,
              USE_PUBLIC_THREADS: true,
              CREATE_PUBLIC_THREADS: true,
              SEND_MESSAGES_IN_THREADS: true,
              EMBED_LINKS: true,
              READ_MESSAGE_HISTORY: memberHasRoleId(member, roles.staff_role.id),
            });
          }
        }
      }
    }
  });
}
