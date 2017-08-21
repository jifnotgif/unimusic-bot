const servers = require('../index.js').servers;
exports.run = (client,message) => {
  var server = servers[message.guild.id];
    try{
      if(server.dispatcher) {
        message.channel.send(":fast_forward: " +server.currentSongInfo[0].title + " has been skipped");
        if(!server.queue[0]) server.currentSongInfo.shift();
        server.dispatcher.end();
      }
    }
    catch(err){
      console.log(err);
    }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'skip',
  description: 'skips current song',
  usage: 'skip'
};
