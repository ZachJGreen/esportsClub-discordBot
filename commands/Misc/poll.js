const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('poll').setDescription('Create poll for voting'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};