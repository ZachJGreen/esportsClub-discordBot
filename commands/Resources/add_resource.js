const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('add_resource').setDescription('add a new team resource'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};