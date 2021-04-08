const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('meme', 'fun', []);
  }

  async run(client, message, args) {
    const subReddits = ["dankmeme", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Here is a meme from r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)

      message.channel.send(embed)
  }
}