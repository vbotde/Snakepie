const SnakeGame = require('snakecord');

const Discord = require("discord.js");

const client = new Discord.Client();


const snakeGame = new SnakeGame({

title: 'Snake Game',

color: "RANDOM",

timestamp: false,

gameOverTitle: "Game Over .Start to try again"

});


const config = {

prefix: "."

}


client.on('ready', () => {

console.log("Clearing Console");

console.clear();

console.log('Ready!');

client.user.setActivity(`${config.prefix}start`);

});


client.on('message', message => {

if(!message.content.startsWith(config.prefix) || message.author.bot) return;


const args = message.content.slice(config.prefix.length).trim().split(/ +/);

const command = args.shift().toLowerCase();


if(command === 'start' || command === 'snakegame') {

return snakeGame.newGame(message);

}

});


client.login(process.env.TOKEN);