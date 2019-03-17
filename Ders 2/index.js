const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`${client.user.tag} İsmiyle giriş yapıldı!`);
});

client.on('message', msg => {

  if (msg.content === prefix + "prefix") {
    msg.reply("Benim prefixim; " + "`" + `${prefix}` + "`");
  }

  if (msg.content === prefix + "ping") {
    msg.reply(`Benim pingim; ` + "`" + `${client.ping}` + "`");
  }

    /*if (!msg.content.startsWith("?")) {
      if (!msg.author.id === "556519608455004161") {
          client.channels.get("556621372844015623").sendMessage(`Yazılan Mesaj: ${msg.content}\nYazan Kişi: ${msg.author.tag}`);
      }
      return;
    } else {
      if (!msg.author.id === "556519608455004161") {
        client.channels.get("556621372844015623").sendMessage(`Kullanılan komut: ${msg.content}\nYazan Kişi: ${msg.author.tag}`);
      }
      return;
    }*/

if (msg.author.id !== "556519608455004161") {
  if (!msg.content.startsWith(prefix)){
    client.channels.get("556621372844015623").send(`Yazılan Mesaj: ${msg.content}\nYazan Kişi: ${msg.author.tag}`);
    return;
  } else {
    client.channels.get("556621372844015623").send(`Kullanılan Komut: ${msg.content}\nKullanan Kişi: ${msg.author.tag}`);
    return
  }
} return;


});



client.login(ayarlar.token);
