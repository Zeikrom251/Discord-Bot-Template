const { connectToDataBase } = require('../handlers/loadDataBase');
const loadSlashCommand = require('../loader/loadSlashCommand');
const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  async execute(bot) {
    await connectToDataBase();

    await loadSlashCommand(bot);

    console.log(`${bot.user.tag} is now ON !`);
  },
};
