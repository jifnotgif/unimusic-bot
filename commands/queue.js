const servers = require('../index.js').servers;
exports.run = (client, message, params) => {
  var server = servers[message.guild.id];
  var responses = [""];
  var pageNum = 0;
  try{
    for (i =0; i< server.queue.length; i++){
      if (responses[pageNum].length > 1850) {
        createNewResponse(responses);
        pageNum++;
      }
        responses[pageNum] += (i+1)+". "+ server.queue[i].title + " - requested by " + server.queue[i].requester+"\n";
    }
  }
  catch(error){
    //server.queue undefined
    console.log(error);
  }
  if (responses[0] != "" && pageNum==0){
    message.channel.send(responses[0]);
  }
  else if(responses[0] != "" && pageNum>0){
    for (i =0; i<pageNum; i++){
      message.channel.send(responses[i]);
    }
  }
  else{
      message.channel.send(":x: No songs in queue :x:");
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['q','songs','songlist'],
  permLevel: 0
};

exports.help = {
  name: 'queue',
  description: 'lists songs in current queue',
  usage: 'queue'
};
