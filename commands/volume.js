const servers = require('../index.js').servers;
exports.run = (client, message, volSetting, ignore2, ignore3) => {
  var server = servers[message.guild.id];
  try{
    if(!message.member.voiceChannel){
      message.channel.send("Request change inside a voice channel");
      return;
    }
    if (volSetting > 200 || volSetting < 0) return message.channel.send('Volume out of range!').then((response) => {
			response.delete(3000);
		});
    message.channel.send("Volume set to " + volSetting);
		server.dispatcher.setVolume((volSetting/100));
    }

  catch(error){
    console.log(error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'vol',
  description: 'adjusts volume for music',
  usage: 'volume [0-200]'
};
