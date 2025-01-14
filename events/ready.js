const loadSlashCommand = require("../loader/loadSlashCommand");
const loadDatabase = require("../loader/loadDataBase");

module.exports = async (bot) => {
  async function connectToDataBase() {
    try {
      bot.db = await loadDatabase();
      bot.db.connect(function () {
        console.log("DataBase connection established successfully !");
      });

      bot.db.on("error", async function (err) {
        console.log("Database ERROR :", err);
        if (err.code === "ECONNRESET") {
          try {
            const db = await loadDatabase();
            console.log("Database successfully reconnected !");
            bot.db = db;
          } catch (errDB) {
            console.error(
              "Erreur lors de la reconnexion à la base de données :",
              errDB
            );
          }
        } else {
          throw err;
        }
      });
    } catch (error) {
      console.error(
        "Erreur lors de la connexion à la base de données :",
        error
      );
    }
  }

  await connectToDataBase();

  await loadSlashCommand(bot);

  console.log(`${bot.user.tag} is now ON !`);
};
