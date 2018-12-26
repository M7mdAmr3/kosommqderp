const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
    console.log(` The Bot is Ready ${client.user.username}`);
});











const developers = ["398558318030749739","486697035718852619","527006451269369877"]
const adminprefix = "ok";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.send(`**dun  ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**dun ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**  dun ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 's')) {
    client.user.setGame(argresult, "https://www.twitch.tv/xnxc");
      message.channel.send(`**DONE   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);
