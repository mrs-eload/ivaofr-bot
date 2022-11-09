import * as store from "../store"
import { ApplicationCommandPermissions, ApplicationCommandPermissionType, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import { DiscordUser } from "../core";
import { CommandRegistration } from "./command.interface";

const storage = store.get(process.env.STORAGE)

export const find_member: CommandRegistration = {
  register: function() {
    return new SlashCommandBuilder().setName('user')
      .setDescription('user [vid]')
      .setDefaultMemberPermissions(0)
      .addNumberOption(option => option.setName('vid').setDescription('Chercher par VID'))
      .addNumberOption(option => option.setName('discord_id').setDescription('Chercher par Discord ID'))
  },
  execute: async function(interaction){
    const VIDRegex = new RegExp(/(\d{6})/)
    const IdRegex = new RegExp(/(\d+)/)

    const findUser = async (discord_user, needle) => {
      return await storage.find(discord_user)
        .then(result => result.json())
        .then(data => {
          if (!data) throw new Error(`Can't find member ${needle}`);
          if (data.status >= 400) {
            throw new Error(`Server responded ${data.response}`)
          }
          if (data.response === null) {
            throw new Error(`Can't find discord attached to member ${needle}, maybe kick them?`)
          }

          for (let key in data.response) {
            discord_user[key] = data.response[key];
          }
          return discord_user;
        })
        .then(discord_user => {
          return new EmbedBuilder()
            .setColor("#14dc1e")
            .setTitle("Nungesser a trouvé quelque chose!")
            .addFields([
              { name: `Profil IVAO:`, value: `https://www.ivao.aero/Member.aspx?Id=${discord_user.user_id}` },
              { name: `VID:`, value: `${discord_user.user_id}`},
              { name: `Nom:`, value: `${discord_user.name}`},
              { name: `Pseudo`, value: `${discord_user.nickname}`},
              { name: `Discord ID:`, value: `${discord_user.discord_id}`},
              { name: `Discord Tag:`, value: `${discord_user.discord_tag}`},
              { name: `A accepté les règles?`, value: `${(discord_user.is_active) ? 'Oui' : 'Non'}`},
            ])
        }).catch(err => {
          return new EmbedBuilder()
            .setColor("#DC143C")
            .setTitle("Nungesser a eu des problèmes!")
            .addFields([{name: `Erreur`, value: `${err.message}`}])
        })
    }
    let vid = interaction.options.get('vid')
    let discord_id = interaction.options.get('discord_id')
    let response = new EmbedBuilder()

    try {
      if(vid){
        let match = VIDRegex.exec(vid.value);
        if (match && match[1]) {
          const discord_user = new DiscordUser({
            user_id: parseInt(match[1])
          })
          response = await findUser(discord_user, match[1]);
        }else{
          throw new Error("Verifiez la longueur du VID")
        }
      }else if(discord_id){
        let match = IdRegex.exec(discord_id.value);
        if (match && match[1]) {
          const discord_user = new DiscordUser({
            discord_id: parseInt(match[1])
          })
          response = await findUser(discord_user, match[1]);
        }
      }else{
        throw new Error("Vérifiez l'option")
      }
    }catch(err){
      console.log(err)
      response.setColor("#DC143C")
        .setTitle("Makemake a eu des problèmes!")
        .addFields([{name: `Erreur`, value: `${err.message}`}])
      return response;
    }
    return response;
  },
  getDefaultPermissions: function(roles) : ApplicationCommandPermissions[]{
    return [{
      id: roles.staff_role.id,
      type: ApplicationCommandPermissionType.Role,
      permission: true,
    }];
  }
}