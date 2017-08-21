const servers = require('../index.js').servers;

function shuffleQueue(s){
  var temp, randomIndex;
  for ( i = s.queue.length-1; i>0; i--){
    randomIndex = Math.floor(Math.random()*i);
    temp = s.queue[i];
    s.queue[i] = s.queue[randomIndex];
    s.queue[randomIndex] = temp;
  }
}

exports.run = (client, message) => {
  var server = servers[message.guild.id];
  shuffleQueue(server)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shuffle',
  description: 'shuffles songs in queue',
  usage: 'shuffle'
};
