const path = require('path');
const fs = require('fs');
const { Events, InteractionType } = require('discord.js');
const { errorHandler } = require('../context/utils/errorHandler');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    /* === Slash Commands === */
    if (interaction.type === InteractionType.ApplicationCommand) {
      try {
        const command = bot.commands.get(interaction.commandName);
        if (!command) return;
        await command.run(bot, interaction, interaction.options);
      } catch (error) {
        errorHandler(interaction, error);
      }
      return;
    }

    /* === Buttons, Modals, Selectors === */
    const folders = ['buttons', 'modals', 'selects'];
    for (const folder of folders) {
      const folderPath = path.join(
        __dirname,
        `../components/interactions/${folder}`
      );
      const files = fs.readdirSync(folderPath);

      for (const file of files) {
        const handler = require(path.join(folderPath, file));
        const customIds = Array.isArray(handler.customId)
          ? handler.customId
          : [handler.customId];

        if (
          customIds.some(
            (id) =>
              interaction.customId === id ||
              interaction.customId.startsWith(id + '_')
          )
        ) {
          try {
            return await handler.execute(interaction);
          } catch (error) {
            errorHandler(interaction, error);
          }
        }
      }
    }
  },
};
