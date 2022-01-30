import { MessageEmbed } from "discord.js";

interface ExecuteFunction {
  (interaction?: any): MessageEmbed |Promise<MessageEmbed>
}
interface DefaultPermissionFunction {
  (roles: any)
}
export interface CommandRegistration {
  register: Function,
  execute: ExecuteFunction,
  getDefaultPermissions: DefaultPermissionFunction
}
