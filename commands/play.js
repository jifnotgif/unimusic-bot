const Discord = require('../discord.js');
const ytdl = require('ytdl-core');
const servers = require('../index.js').servers;
//var autoMode = require('./autoplay.js').run;
function play(connection, message){
  var server = servers[message.guild.id];
  var songEmbed = new Discord.RichEmbed()
    .setColor(0x663399)
    .setTitle(":notes:" +server.queue[0].title)
    .setAuthor(" NOW PLAYING ")
    .setDescription(server.queue[0].description)
    .setThumbnail(server.queue[0].thumbnail.url)
    .setFooter("Requested by: "+ server.queue[0].requester.username);
  message.channel.send({embed:songEmbed});
  server.currentSongInfo.push({title:server.queue[0].title});
  server.dispatcher = connection.playStream(ytdl(server.queue[0].link, {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher.on("end", ()=>{
    if (server.queue[0]){
    play(connection,message);
    server.currentSongInfo.shift();
  }
    else connection.disconnect();
    });

}

exports.run = (client, message, params) => {
  var server = servers[message.guild.id];
  if(!message.member.voiceChannel){
    message.channel.send("Request play inside a voice channel");
    return;
  }

    if( server.queue.length >= 1 ){
      if (!message.guild.voiceConnection) {
            message.member.voiceChannel.join().then(
              connect =>{play(connect,message);})
        .catch(err => {
            console.log(err);
            });
          }
      }
      else  message.channel.send(":x: No songs in queue :x:");

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: 'plays songs in current queue',
  usage: 'play'
};
