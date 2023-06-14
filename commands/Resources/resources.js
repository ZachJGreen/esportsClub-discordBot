const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('resources').setDescription('Access team resources'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};