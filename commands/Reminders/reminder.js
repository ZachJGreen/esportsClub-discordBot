const{SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder().setName('reminder').setDescription('Create reminder'),
    async execute(interaction){
        await interaction.reply('Wabadooba');
    },
};