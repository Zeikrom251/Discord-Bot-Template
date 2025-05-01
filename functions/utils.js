const { EmbedBuilder } = require("discord.js")
const Config = require("../config")

// Function to generate a random ID (for database insert)
function generateID() {
  let characters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  ]
  let firstId = []
  let secondId = []

  for (let i = 0; i < 4; i++)
    firstId.push(characters[Math.floor(Math.random() * characters.length)])
  for (let j = 0; j < 4; j++)
    secondId.push(characters[Math.floor(Math.random() * characters.length)])

  const fullID = `${firstId.join("")}-${secondId.join("")}`

  return fullID
}

// Function to generate current timestamp
function currentTimestamp() {
  const currentTime = Math.floor(Date.now() / 1000)

  return currentTime
}

// Function to handler or errors in this file
async function errorHandler(interaction, error) {
  const embedErrorDetectionLog = new EmbedBuilder()
    .setColor(Config.colors.mainServerColor)
    .setTitle("📌 Error Détecté :")
    .setDescription(`\`\`\`${error}\`\`\``)
    .setTimestamp()

  const embedErrorDetected = new EmbedBuilder()
    .setColor(Config.colors.error)
    .setDescription(
      `${Config.emotes.error} **Une erreur a été détecté lors de votre interaction !**`
    )

  console.error(error)
  await bot.channels.cache
    .get(Config.channels.errorLogs)
    .send({ embeds: [embedErrorDetectionLog] })
  return await interaction.reply({
    embeds: [embedErrorDetected],
    components: [],
    ephemeral: true,
  })
}

module.exports = {
  generateID,
  currentTimestamp,
  errorHandler,
}
