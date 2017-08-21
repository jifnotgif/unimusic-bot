exports.run = (client, message) => {
      var userInfo = {userID: message.author.id, discriminator: message.author.discriminator, userName:message.author.username, creationDate:message.author.createdAt};
      var summary = "Hello <@!" + userInfo.userID + ">, your userID is " +userInfo.userID +" and you were born on " + userInfo.creationDate.toLocaleString();
      message.channel.send(summary);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mystats'],
  permLevel: 0
};

exports.help = {
  name: 'userstats',
  description: 'provides stats about the user',
  usage: 'userstats'
};
