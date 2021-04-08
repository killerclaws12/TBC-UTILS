const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  async run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
    .setTitle('Help Command')
    .setDescription('Use ?help command category name to access another command category.\ncategories:\ninformation\nfun\nmoderation\nutility')
    .addField('Information commands', 'Commands that return some form of important imformation.')
    .addField('Fun commands', 'Commands that are fun.')
    .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
    .addField('Utility commands', 'Commands that are useful to both mods and members.')
    .setFooter(client.user.tag, client.user.displayAvatarURL());
  
 const infoEmbed = new Discord.MessageEmbed()  
    .setTitle('Information Commands.')
    .addField('Help Commands', 'This commands shows the user all the commands.')

    const funEmbed = new Discord.MessageEmbed()  
    .setTitle('Fun Commands.')
    .addField('Snipe Command', 'Snipes a deleted message.')
    .addField('Meme Command', 'Run this command to get a funny meme.')
  
  
 const moderationEmbed = new Discord.MessageEmbed()
    .setTitle('Moderation Commands.')
    .addField('Kick Command', 'Kicks a member from the server')
    .addField('Warn Command', 'Warns a member from the server')
    .addField('Slowmode Command', 'Sets the slowmode of a channel')

 const utilityEmbed = new Discord.MessageEmbed()
    .setTitle('Utility Commands.')
    .addField('Verify Command', 'Gives the user the member role for the server.');
  
 if (!args[0]) return message.channel.send(sectionEmbed);
 if (args[0] == 'information') return message.channel.send(infoEmbed);
 else if (args[0] == 'utility') return message.channel.send(utilityEmbed);
 else if (args[0] == 'fun') return message.channel.send(funEmbed);
 else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
  }
}