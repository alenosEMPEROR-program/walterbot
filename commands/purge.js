module.exports = {
    name: "purge",
    async execute(msg, args) {
        if (msg.member.hasPermission("MANAGE_MESSAGES")) {
            msg.channel.messages.fetch({ limit: Number(args[1]) }).then(messages => {
                messages.forEach(ms => {
                    ms.delete();
                })
        });            
        } else msg.reply("You dont have the premission to do this, noob")
    }
}