module.exports = {
  name: "ping",
  description: "The bot will respond by pong!",
  dm: false,

  async run(interaction) {
    await interaction.reply({content: "🏓 Pong!"})
  },
}
