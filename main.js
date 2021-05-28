const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//get commands
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async (message) => {
  if (message.author.bot) return;

  let args = [message.content[0], ...message.content.trim().slice(1).split(" ")];
  if(args[0] != config.PREFIX) return;
  args.shift();
  const commandName = args[0];

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    await command.execute(message, args);
  } catch (error) {
    console.log(error);
    let embed = new Discord.MessageEmbed();
    embed.color = config.COLORS[Math.floor(Math.random()*7)];
    embed.title =  'Errrrrror :/';
    embed.description = 'Sorry man, my bad...';
    embed.attachFiles(["./assets/error.jpg"]);
    embed.setImage("attachment://error.jpg")
    return message.reply(embed);
  }
})

client.login(config.TOKEN);