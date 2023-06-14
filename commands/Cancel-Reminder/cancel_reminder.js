const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('cancel reminder')
        .setDescription('delete a reminder'),
    async execute(interaction){
        await interaction.reply('Canceling reminder');
    },
};