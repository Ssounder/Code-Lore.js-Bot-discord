<const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lore")
    .setDescription('Ve el lore del bot.'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
        .setColor("Blue")
            .setTitle(`HISTORIA DE **TU BOT**`)
            .setImage(`imagen`)
            .setDescription(editar

            **Fecha de creación!:** editar
            **Colaboradores:**editarCCC); 

            interaction.reply({ embeds: [embed] });
    }
}
