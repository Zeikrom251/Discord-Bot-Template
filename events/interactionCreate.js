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
