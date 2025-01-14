const mysql = require("mysql2");
const Config = require("../config.json");

module.exports = async () => {
  let db = await mysql.createConnection({
    host: Config.db.dataBaseHost,
    user: Config.db.dataBaseUser,
    password: Config.db.dataBasePassword,
    database: Config.db.dataBaseName,
  });

  return db;
};
