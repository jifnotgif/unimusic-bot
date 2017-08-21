exports.run = (client, message) => {
    var randomNum = Math.floor(Math.random()*100 + 1).toString();
    message.channel.send(randomNum);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rng',
  description: 'generates a random number from 1-100',
  usage: 'rng'
};
