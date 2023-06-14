const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('resource')
        .setDescription('access team resources'),
    async execute(interaction){
        await interaction.reply('OK!');
    },
};