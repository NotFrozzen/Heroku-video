//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require('discord.js');
const superagent = require("superagent");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 client.on('message', msg => {
  if (msg.content === '?other3' && msg.channel.id === '723062483635535972') {
   const embed = new Discord.MessageEmbed()
		.setColor(0x0450fe)
		.setTitle('`LyrexSS Prices:`')
    .setURL('https://lyrexss.ml/')
   . setAuthor('LyrexSS', 'https://media.discordapp.net/attachments/718862238588600400/723052395738955777/SPOILER_test-Recuperado.jpg?width=676&height=380', 'https://discord.js.org')
		.setDescription('`LyrexTools [AntiSS, IpResolver, Clear SS]\n\n20€\n\nCustom username + custom password\nDaily Updates\nAnydesk Ip Resolver\nAntiSS\nClear SS Bypass`')
    msg.channel.send({embed})
	}
    
});  

  client.on('message', msg => {
  if (msg.content === '?other2' && msg.channel.id === '723062483635535972') {
   const embed = new Discord.MessageEmbed()
		.setColor(0x0450fe)
		.setTitle('`LyrexSS Prices:`')
    .setURL('https://lyrexss.ml/')
   . setAuthor('LyrexSS', 'https://media.discordapp.net/attachments/718862238588600400/723052395738955777/SPOILER_test-Recuperado.jpg?width=676&height=380', 'https://discord.js.org')
		.setDescription('`DDos Tool Python [3.8]\n\n3€\n\nCustom username + custom password\nCustom Name\nDaily Updates\n1 user`')
    msg.channel.send({embed})
	}
    
});  

  client.on('message', msg => {
  if (msg.content === '?other' && msg.channel.id === '723062483635535972') {
   const embed = new Discord.MessageEmbed()
		.setColor(0x0450fe)
		.setTitle('`LyrexSS Prices:`')
    .setURL('https://lyrexss.ml/')
   . setAuthor('LyrexSS', 'https://media.discordapp.net/attachments/718862238588600400/723052395738955777/SPOILER_test-Recuperado.jpg?width=676&height=380', 'https://discord.js.org')
		.setDescription('`Anydesk Ip Resolver\n\n2€\n\nIp Resolver [Anydesk]\nCustom username + custom password`')
    msg.channel.send({embed})
	}
    
});  

  client.on('message', msg => {
  if (msg.content === '?prices' && msg.channel.id === '718862244355768381') {
   const embed = new Discord.MessageEmbed()
		.setColor(0x0450fe)
		.setTitle('`LyrexSS Prices:`')
    .setURL('https://lyrexss.ml/')
   . setAuthor('LyrexSS', 'https://media.discordapp.net/attachments/718862238588600400/723052395738955777/SPOILER_test-Recuperado.jpg?width=676&height=380', 'https://discord.js.org')
		.setDescription('`PERSONAL\n\n5€ / MONTH\n\n100+ Detected Cheats\nUnlimited PINs\nDaily Updates\n1 user`\n──────────────────────────────\n`PERSONAL LIFETIME\n\n10€ / LIFETIME\nUnique System\n100+ Detected Cheats\nUnlimited PINs\nDaily Updates\n1 user`')
    msg.channel.send({embed})
	}
    
});  

client.on('message', msg => {
    if (msg.content === '?help' && msg.channel.id === '718862240140492820') {
    let random = ["HELP LYREXSS",]
    let aleatoria = random[Math.floor(Math.random() * random.length)];
      const embed = new Discord.MessageEmbed()
      .setColor(0x0450fa)
      .setTitle(`${aleatoria}`)
      .addField("Bienvenido a la guia de ayuda de lyrexSS. Como puede ver LyrexSS es una herramienta de screenshare automatica. Cuenta con sistema de pin el cual se genera por medio de un bot de discord que tenemos en nuestro grupo de discord. si usted tiene algun problema con algunas funciones del bot o tool pueden contactar con los creadores que son los siguientes Jaden#6676 drip#0800 yungFran#4387", "Att Equipo de administracion de LyrexSS");
      msg.author.send({embed})
  }
  
});  


client.on('message', msg => {
    if (msg.content === '?pin' && msg.channel.id === '813224758904750160') {
    let random = ["8664744530", "779356079", "7205879725", "8661575728", "6306835392", "6692463689", "7298716959", "8450824106", "8914273955", "8880429889", "7826771800","886663917", "8410590411", "6997529496", "8796847153", "7918027650", "7447916981", "674109386", "7611963935", "8920742400", "6348414748", "8766537266", "7993753960", "8419782188", "7341494891", "7933489152", "7630939116", "7335421552", "7388501108", "8632849028", "7194480062", "6118817084", "7217482531", "7180720735", "8999169181", "6730327925", "7214784171", "6309113042", "8994486422", "8756881202", "6647163608",]
    let aleatoria = random[Math.floor(Math.random() * random.length)];
      const embed = new Discord.MessageEmbed()
      .setColor(0x0450fa)
      .setTitle(`${aleatoria}`)
      .addField("If you need help contact Jaden#6676", "Thanks");
      msg.channel.send({embed})
  }
  
});  


client.login('ODE0MzE1NDg2NjAxODA1ODQ1.YDcEZQ.NEaug-ClUr8OTiWV2d6QbM35IzA');
