const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('del_resource').setDescription('Remove a team resource'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};