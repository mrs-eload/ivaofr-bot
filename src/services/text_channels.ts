import { Bot } from '../core/Bot'
import { GuildChannel, Permissions } from "discord.js";
import { ChannelTypes } from "discord.js/typings/enums";
import { fetchRoles, memberHasRoleId } from "./roles";


export const checkChannels = async () => {
  await Bot.connect();

  const channels = await Bot.guild.channels.fetch();
  const voice_channels = [...channels.values()].filter(channel => channel.type === 'GUILD_VOICE')
  const text_channels = [...channels.values()].filter(channel => channel.type === 'GUILD_TEXT')
  const roles = fetchRoles(Bot.guild)

  for (const channel of voice_channels) {
    const text_eq = voiceChannelNameToTxt(channel.name);
    const txt_channel = text_channels.find(txt_channel => text_eq === txt_channel.name);
    const everyone_role = Bot.guild.roles.cache.find(role => role.name === '@everyone');

    const common_permissions = [
      Permissions.FLAGS.VIEW_CHANNEL,
      Permissions.FLAGS.SEND_MESSAGES,
      Permissions.FLAGS.SEND_TTS_MESSAGES,
      Permissions.FLAGS.SEND_MESSAGES_IN_THREADS,
      Permissions.FLAGS.READ_MESSAGE_HISTORY
    ]

    const permissions = [
      {
        id: everyone_role.id,
        deny: common_permissions
      },
      {
        id: roles.member_role.id,
        deny: common_permissions,
      },
      {
        id: roles.staff_role.id,
        deny: common_permissions,
      },
    ];

    if (!txt_channel) {
      await Bot.guild.channels.create(text_eq, {
        position: (channel.position > 0) ? channel.position - 1 : 0,
        parent: channel.parentId,
        type: ChannelTypes.GUILD_TEXT,
        permissionOverwrites: permissions,
      });
      console.log(`Channel ${text_eq} created`)
    }else{
      txt_channel.permissionOverwrites.set(permissions);
    }
  }
}

export const voiceChannelNameToTxt = (channel_name) => {
  return `${channel_name.replace(/\s+/g, '-').replace(/'|"/g, '').toLowerCase()}-texte`;
}

export const text_to_voice = async () => {
  const bot = await Bot.connect();
  const roles = fetchRoles(Bot.guild)
  await checkChannels()
  bot.on('voiceStateUpdate', async (old, voice) => {

    const member = old.member;
    const guild = old.guild;

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
      const member_has_role_id = memberHasRoleId(member, roles.staff_role.id)
      if (textChannel) {
        await textChannel.permissionOverwrites.create(member, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            SEND_TTS_MESSAGES: true,
            SEND_MESSAGES_IN_THREADS: true,
            READ_MESSAGE_HISTORY: member_has_role_id,
        });
      }
    }
  });
}
