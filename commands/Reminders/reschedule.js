const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('reschedule').setDescription('Change time/date that reminder is sent'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};