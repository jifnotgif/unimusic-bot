const servers = require('../index.js').servers;
exports.run = (client) => {
  var server = servers[message.guild.id];
  if(server.queue.length != 0) server.queue.length =0;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear',],
  permLevel: 0
};

exports.help = {
  name: 'clearqueue',
  description: 'clears all music in queue',
  usage: 'clearqueue'
};
