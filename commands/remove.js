const servers = require('../index.js').servers;
exports.run = (client, message, ignore, ignore2, removeInfo) => {
  var server = servers[message.guild.id];
  var selectedSongIndex = parseInt(removeInfo,10) -1;
  if (selectedSongIndex >-1){
    server.queue.splice(selectedSongIndex,1);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'remove',
  description: 'removes the song at specified position in queue',
  usage: 'remove [song position]'
};
