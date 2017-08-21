const Discord = require('discord.js');
const botSettings = require('./botsettings.json');
const fs = require("fs");
const client = new Discord.Client();
exports.servers = {queue:[],currentSongInfo:[]};
require('./util/eventLoader')(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(fileName => {
    let props = require(`./commands/${fileName}`);
    console.log(`Loading Command: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(botSettings.TOKEN);
