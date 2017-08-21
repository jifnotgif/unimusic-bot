const settings = require('../botsettings.json');
const Discord = require('../discord.js');
exports.run = (client, message) => {
  var embed = new Discord.RichEmbed()
    .setColor(0x663399)
    .setDescription("Hello! I'm uni-music bot. I was created as a music playing bot but also serve many other functions as well. Type !help to get started.");
    message.channel.send({embed:embed});
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'botinfo',
    description: 'displays information about uni-music bot',
    usage: 'botinfo'
  };
