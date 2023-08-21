const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Informacion sobre el usuario'),
	async execute(interaction) {
		await interaction.reply(`Este comando fue ejecutado por el bolas tristes de ${interaction.user.username}. Este se unio el ${interaction.member.joinetAt} al servidor!`);
	},
};