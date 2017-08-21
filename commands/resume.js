const servers = require('../index.js').servers;
exports.run = (client, message) => {
  var server = servers[message.guild.id];
  try{
    if(server.dispatcher) {
    message.channel.send(":play_pause:");
    server.dispatcher.resume();
    }
  }
  catch(error){
    console.log(error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'resume',
  description: 'resumes music',
  usage: 'resume'
};
