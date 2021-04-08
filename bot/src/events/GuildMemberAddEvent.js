// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const role = member.guild.roles.cache.get('813059687808368674')
    await member.roles.add(role.id).catch(err => console.log(err))

    const welcomeChannel = member.guild.channels.cache.get('813059688119402514')
    const rulesChannel = member.guild.channels.cache.get('813059687808368678')
    welcomeChannel.send(`<@${member.user.id}>, welcome to ${member.guild.name}! Please take your time and review the ${rulesChannel} channel!`)
  }
}