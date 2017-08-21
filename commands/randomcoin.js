exports.run = (client, message) => {
      var side = ["heads","tails"]
      message.channel.send(side[Math.floor(Math.random()*2)]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['coin', 'flip'],
  permLevel: 0
};

exports.help = {
  name: 'randomcoin',
  description: 'flips a coin, lands heads or tails',
  usage: 'randomcoin'
};
