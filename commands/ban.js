module.exports = {
    name: 'ban',
    async execute(msg, args) {
        if (msg.member.hasPermission("BAN_MEMBERS")) {
            msg.guild.member(msg.mentions.users.first().id).ban().catch(() => msg.reply("No such user!"));
        } else msg.reply("I think u dont have premission to ban");
    }
  };