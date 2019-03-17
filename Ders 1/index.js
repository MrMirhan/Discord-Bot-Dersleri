const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} İsmiyle giriş yapıldı!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTU2NTE5NjA4NDU1MDA0MTYx.D2668Q.kIZfB1WT0zTsgMZsZoG4wEH-fvw');
