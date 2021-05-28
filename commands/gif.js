const axios = require("axios");
const config = require("../config.json");
const Discord = require("discord.js");

module.exports = {
    name: "gif",
    async execute(msg, args) {
        axios.get(`https://api.tenor.com/v1/search?key=ZA0URDZMIQ3R&q=${args[1]}`)
        .then(function (response) {
            let embed = new Discord.MessageEmbed();
            embed.color = config.COLORS[Math.floor(Math.random()*7)];
            embed.setImage(response.data.results[Math.floor(Math.random()*20)].url);
            msg.channel.send(embed);
        })
    }
};