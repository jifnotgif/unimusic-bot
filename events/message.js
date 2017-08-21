const settings = require('../botsettings.json');
module.exports = message =>{
  let client = message.client;
  if (!message.content.startsWith(settings.PREFIX)) return;
  if (message.author.bot) return;

  let args = message.content.split(" ");
  let command = args[0].slice(settings.PREFIX.length);
  let param1 = message.content.substring(settings.PREFIX.length+"add ".length);
  let param2 =message.content.substring(settings.PREFIX.length+"move ".length);
  let param3 =message.content.substring(settings.PREFIX.length+"remove ".length);
  //let perms = client.elevation(message);
  var cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    //if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, param1, param2, param3);
  }
};
