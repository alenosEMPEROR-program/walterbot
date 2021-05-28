module.exports = {
  name: 'kick',
  async execute(msg, args) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
      msg.guild.member(msg.mentions.users.first().id).kick().catch(() => msg.reply("No such user!"));
  } else msg.reply("I think u dont have premission to kick");
  }
};