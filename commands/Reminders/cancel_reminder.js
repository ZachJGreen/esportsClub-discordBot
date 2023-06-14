const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('cancel_reminder').setDescription('Cancel a reminder that is already created'),
    async execute(interaction) {
        await interaction.reply('test');
    },
};