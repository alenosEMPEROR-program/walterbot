const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "decode",
    category: "extra",
    async execute(message, args) {
        const url = `http://some-random-api.ml/binary?decode=${args.slice(1).join(" ")}`;

        let response, data;
        response = await axios.get(url);
        data = response.data;

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text == args.slice(1).join(" ") ? "Invalid binary format!" : data.text);

        await message.channel.send(embed)
    }
}