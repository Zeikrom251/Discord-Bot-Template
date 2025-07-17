const intents = new IntentsBitField(3276799);
const bot = new Client({ intents });
const loadCommands = require('./src/handlers/loadCommands');
const loadEvents = require('./src/handlers/loadEvents');
const { Config } = require('./src/context/config');
const {
  IntentsBitField,
  Client,
  Collection,
  EmbedBuilder,
} = require('discord.js');
require('dotenv').config();

bot.commands = new Collection();

// Gestion des erreurs du bot
process.on('unhandledRejection', (err, origin) => {
  console.log(err, origin);

  let embedBotLogs = new EmbedBuilder()
    .setColor(Config.colors.mainServerColor)
    .setTitle(`📌 Error detected:`)
    .setDescription(`\`\`\`${err}\n\n\n${origin}\`\`\``)
    .setTimestamp();

  bot.channels.cache
    .get(Config.channels.errorLogs)
    .send({ embeds: [embedBotLogs] });
});

process.on('unhandledRejectionMonitor', (err, origin) => {
  console.log(err, origin);

  let embedBotLogs = new EmbedBuilder()
    .setColor(Config.colors.mainServerColor)
    .setTitle(`📌 Error detected:`)
    .setDescription(`\`\`\`${err}\n\n\n${origin}\`\`\``)
    .setTimestamp();

  bot.channels.cache
    .get(Config.channels.errorLogs)
    .send({ embeds: [embedBotLogs] });
});

bot.login(process.env.TOKEN).then(() => {
  global.bot = bot;
  loadCommands(bot);
  loadEvents(bot);
});
