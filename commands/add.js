const search = require('youtube-search');
const ypi = require('youtube-playlist-info');
const opts = {
  maxResults: 3,
  key: 'AIzaSyBBdtiejmGaTZpHBMN6sfQkWQQw2rftjwE'
};
const servers = require('../index.js').servers;
exports.run = (client, message, addSongParam) => {
 if(!servers[message.guild.id]) servers[message.guild.id] ={queue:[],currentSongInfo:[]};
 var server = servers[message.guild.id];
  if(!addSongParam){
    message.channel.send("Provide a valid input");
    return;
  }

  search(addSongParam,opts,(err,results)=>{
    if(err) console.log(err);
    if(results[0].kind === 'youtube#video') server.queue.push({title:results[0].title, link:results[0].link, description:results[0].description, thumbnail:results[0].thumbnails.default, requester:message.author});
    if(results[0].kind === 'youtube#playlist') {
      playlistID = results[0].link.substring('https://www.youtube.com/playlist?list='.length);
      ypi.playlistInfo("AIzaSyBBdtiejmGaTZpHBMN6sfQkWQQw2rftjwE", playlistID, function(playlistItems) {
        for(i =0; i<playlistItems.length;i++){
          if(playlistItems[i].description.length>168){
            playlistItems[i].description = playlistItems[i].description.substring(0,168) +"...";
          }
          server.queue.push({title:playlistItems[i].title, link:playlistItems[i].resourceId.videoId, description:playlistItems[i].description, thumbnail:playlistItems[i].thumbnails.default, requester:message.author});
        }
      });
      }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'add',
  description: 'adds song to queue',
  usage: 'add [songName]/[YouTube video/playlist link]'
};
