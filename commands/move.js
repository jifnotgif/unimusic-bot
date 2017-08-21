const servers = require('../index.js').servers;
exports.run = (client, message, ignore, moveInfo) => {
  var server = servers[message.guild.id];
  var indexInfo = moveInfo.split(" ");
  var selectedSongIndex = indexInfo[0] -1;
  var newIndex = 0;
  if(indexInfo[1]){
    newIndex = indexInfo[1] -1;
  }
  server.queue.splice(newIndex,0,server.queue[selectedSongIndex]);
  server.queue.splice(selectedSongIndex+1,1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'move',
  description: ' moves song from selected position to new position in queue, if no new index defaults to next song',
  usage: 'move [old song position] [new song position]'
};
