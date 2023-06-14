const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('reschedule')
        .setDescription('edit reminder"'),
    async execute(interaction) {
        await interaction.reply('Creating reschedule');
    },
};