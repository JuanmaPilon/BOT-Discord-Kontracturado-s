const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Ping')
		.setDescription('probaaandooo'),
	async execute(interaction) {
		await interaction.reply('Pong');
	},
};