const settings = require('../botsettings.json');
const Discord = require('../discord.js');
exports.run = (client, message) => {
  var embed = new Discord.RichEmbed()
    .setColor(0x663399)
    .addField("General Commands",
    "**!help** - shows a list of commands \n"+
    "**!randomcoin** - flips a coin \n"+
    "**!rng** - generates a random number 1 - 100 \n"+
    "**!botinfo** - displays information about uni-music bot \n"+
    "**!userstats** - provides stats about the user "
    , true)
    .addField("Music Commands",
    "**!add** ***(youtube URL/song title)*** - adds song to queue \n" +
    "**!play** - plays songs in queue \n"+
    "**!skip** - skips currently playing song \n"+
    "**!pause** - pauses music player \n"+
    "**!resume** - resumes music player \n"+
    "**!stop** - stops playing music and removes all songs in queue\n"+
    "**!queue** - displays current song list \n"+
    "**!clearqueue** - removes all songs in queue \n"+
    "**!remove** ***(song index)*** - removes song from specified position in queue \n"+
    "**!move** ***(old index) (new index)*** - moves song from selected position to new position in queue, if no new index defaults to next song \n"+
    "**!shuffle** - shuffles queue \n"+
    "**!volume (0-200)** - sets the volume of bot",
    true)
    message.channel.send({embed:embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
