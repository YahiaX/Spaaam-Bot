const Discord = require('discord.js');
const client = new Discord.Client();
console.log("The bot by YahiaX");


client.on("ready", () => {
let channel =     client.channels.get("571099646932418600")
setInterval(function() {
channel.send(`SUb to YahiaX For more good videos`);
}, 30)
})

client.login(process.env.BOT_TOKEN);NTcxMTAyNDQzMTYxNzgwMjM0.XMI25g.9QQ9Atx31IXuRlDhhDGVnSQ_xOI