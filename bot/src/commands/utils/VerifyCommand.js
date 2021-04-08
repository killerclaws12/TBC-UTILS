const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'utils', []);
  }

  async run(client, message, args) {
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require the manage roles permission.')

    const roles = message.guild.roles.cache.get('774432658750308379', '774432658721603672')

    await message.member.roles.add(roles.id).catch(err => console.log(err))
    message.delete()
  }
}