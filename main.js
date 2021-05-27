const discord = require("discord.js");
const config = require("./config.json");

function cmdFind(msg) {
    return msg.slice(0, msg.indexOf(" "));
}

const client = new discord.Client();

client.login(config.token);

client.on("message", msg => {
    if(!msg.content.startsWith(config.prefix)) return;
    msg.content = msg.content(1);
    switch(cmdFind(msg.content)) {
        case "hello":
            msg.channel.send("Hello to you 2 nerd...")
            break;
    }
});