const servers = require('../index.js').servers;
exports.run = (client, message) => {
  var server = servers[message.guild.id];
  if(server.queue.length != 0) server.queue.length =0;
  if(server.dispatcher) {
    message.channel.send(":stop_button: Song queue stopped :stop_button:");
    server.dispatcher.end();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stop',
  description: 'stops playing music and clears queue',
  usage: 'stop'
};
