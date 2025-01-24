const Discord = require("discord.js");
const Config = require("../config.json");

module.exports = async (bot, interaction) => {
  let db = bot.db;

  // Function to generate a random ID (for database entries)
  function generateID() {
    let characters = [
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    ];
    let firstId = [];
    let secondId = [];

    for (let i = 0; i < 4; i++)
      firstId.push(characters[Math.floor(Math.random() * characters.length)]);
    for (let j = 0; j < 4; j++)
      secondId.push(characters[Math.floor(Math.random() * characters.length)]);

    const fullID = `${firstId.join("")}-${secondId.join("")}`;

    return fullID;
  }

  // Function to handler or errors in this file
  function errorHandler(bot, interaction, error) {
    const embedErrorDetectionLog = new Discord.EmbedBuilder()
      .setColor(Config.colors.mainServerColor)
      .setTitle("📌 Error Détecté :")
      .setDescription(`\`\`\`${error}\`\`\``)
      .setTimestamp()

    const embedErrorDetected = new Discord.EmbedBuilder()
      .setColor(Config.colors.error)
      .setDescription(`${Config.emotes.error} **Une erreur a été détecté lors de votre interaction !**`)

    console.error(error)
    bot.channels.cache.get(Config.channels.errorLogs).send({ embeds: [embedErrorDetectionLog]})
    interaction.reply({embeds: [embedErrorDetected], ephemeral: true})
  }

  // Gestion des Applications User Commands
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    const command = bot.commands.get(interaction.commandName)
    if (!command) return;

    try {
      await command.run(bot, interaction, interaction.options)
    } catch (error) {
      errorHandler(bot, interaction, error)
    }
  }

  if (interaction.isButton()) {
  }

  if (interaction.isStringSelectMenu()) {
  }

  if (interaction.isModalSubmit()) {
  }

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {
    let command = require(`../commands/${interaction.commandName}`);
    command.run(bot, interaction, interaction.options);
  }
};
