import { ApplicationCommandPermissions, EmbedBuilder } from "discord.js";

interface ExecuteFunction {
  (interaction?: any): EmbedBuilder |Promise<EmbedBuilder>
}
interface DefaultPermissionFunction {
  (roles: any) : ApplicationCommandPermissions[]
}
export interface CommandRegistration {
  register: Function,
  execute: ExecuteFunction,
  getDefaultPermissions: DefaultPermissionFunction
}
