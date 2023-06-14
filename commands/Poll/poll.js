const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('poll')
        .setDescription('create poll for voting'),
    async execute(interaction){
        await interaction.reply('Time to vote!');
    },
};