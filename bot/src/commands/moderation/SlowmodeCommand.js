const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'moderation', []);
  }

  async run(client, message, args) {
   if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have permission to use this command.')
   if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I do not have permission to use this command.')

   const value = Number(args[0])

    if(!args[0]) return message.channel.send('You need to state a number of how long you would like the slowmode to be set to.')
   if(!value || value < 5 || value > 216000) return message.channel.send('You need to state a number between 5 seconds and 6 hours.')
    try {
      await message.channel.setRateLimitPerUser(value)
      message.channel.send(`The slowmode for ${message.channel} has been set to ${value} seconds or hours.`)
    } catch(err) {
      console.log(err)
      message.channel.send('Don’t worry, we’ve sent an report to the hosting server')
    }
  }
}