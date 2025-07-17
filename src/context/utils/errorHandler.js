const { EmbedBuilder } = require('discord.js');
const { Config } = require('../config');
const { emoteComposer } = require('./emoteComposer');

async function errorHandler(interaction, error) {
  const errorDescription = error instanceof Error ? error.stack : String(error);

  const embedErrorDetectionLog = new EmbedBuilder()
    .setColor(Config.colors.mainServerColor)
    .setTitle('📌 Error detected:')
    .setDescription(`\`\`\`${errorDescription}\`\`\``)
    .setTimestamp();

  const embedErrorDetected = new EmbedBuilder()
    .setColor(Config.colors.error)
    .setDescription(
      `### ${emoteComposer(
        Config.emotes.error
      )} An error occurred during your interaction!`
    );

  console.error(error);
  await bot.channels.cache
    .get(Config.channels.errorLogs)
    .send({ embeds: [embedErrorDetectionLog] });
  if (interaction !== '') {
    return await interaction.reply({
      embeds: [embedErrorDetected],
      components: [],
      ephemeral: true,
    });
  }
}

module.exports = { errorHandler };
