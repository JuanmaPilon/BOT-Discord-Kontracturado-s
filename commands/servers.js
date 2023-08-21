const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Proporciona info sobre el Server'),
	async execute(interaction) {
		await interaction.reply(`Este servidor es: ${interaction.guild.name} y tiene ${interaction.guild.memeberCount} boludos`);
	},
};