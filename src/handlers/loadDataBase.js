const mysql = require('mysql2');
require('dotenv').config();

const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 20,
    queueLimit: 0,
  })
  .promise();

async function connectToDataBase() {
  try {
    const connection = await db.getConnection();

    console.log('✅ Database connection established succesfully !');
    connection.release();

    db.on('error', async function (err) {
      console.log('❌ Database ERROR :', err);
      if (err.code === 'ECONNRESET') {
        try {
          const newConnection = await db.getConnection();
          console.log('✅ Database successfully reconnected !');
          newConnection.release();
        } catch (errDB) {
          console.error(
            '❌ Erreur lors de la reconnexion à la base de données :',
            errDB
          );
        }
      } else {
        throw err;
      }
    });
  } catch (error) {
    console.error(
      '❌ Erreur lors de la connexion à la base de données :',
      error
    );
  }
}

module.exports = { db, connectToDataBase };
