module.exports = (client) =>{
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setPresence({game: { name: '!botinfo', type: 0 }});
}
