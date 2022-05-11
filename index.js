const express = require("express");
const app = express();
const prompt = require("prompt-sync")();
app.listen((ee) => console.log("Server started"));
app.use('/', (req, res) => {
  res.send(new Date());
});
const Discord = require("discord.js-self");
const client = new Discord.Client()
const chalk = require('cli-color');

let e = `

██████╗░██████╗░░█████╗░███╗░░░███╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗████╗░██║
██████╔╝██████╔╝██║░░██║██╔████╔██║███████║██╔██╗██║
██╔═══╝░██╔══██╗██║░░██║██║╚██╔╝██║██╔══██║██║╚████║
██║░░░░░██║░░██║╚█████╔╝██║░╚═╝░██║██║░░██║██║░╚███║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`
console.log(chalk.green(e))

const token = prompt("What is your account token without \"\":");

const channel1 = prompt("The channel you want to send to (ChannelId):");

const msg = prompt("message ?:");

const Time = prompt("Time Out ?:");



client.on('ready',async ()=>{
  const channel = client.channels.cache.get(channel1)
  setInterval(()=>{
    channel.send(msg)
    
  },Time*1000)
})

client.login(token)
