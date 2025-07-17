// Examples async query functions for a users table

/* Those are example functions, of course you'll need to adapt them to your specific database setup and error handling. */

async function getAllUsers() {
  try {
    const [rows] = await db.query('SELECT * FROM users;');
    return rows;
  } catch (error) {
    console.error("Error in 'getAllUsers':", error);
    throw error;
  }
}

async function getUserById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows;
  } catch (error) {
    console.error("Error in 'getUserById':", error);
    throw error;
  }
}

async function createUser(username, email, password) {
  try {
    const [result] = await db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?);',
      [username, email, password]
    );
    return result;
  } catch (error) {
    console.error("Error in 'createUser':", error);
    throw error;
  }
}

async function updateUserEmail(id, email) {
  try {
    const [result] = await db.query(
      'UPDATE users SET email = ? WHERE id = ?;',
      [email, id]
    );
    return result;
  } catch (error) {
    console.error("Error in 'updateUserEmail':", error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const [result] = await db.query('DELETE FROM users WHERE id = ?;', [id]);
    return result;
  } catch (error) {
    console.error("Error in 'deleteUser':", error);
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?;', [
      username,
    ]);
    return rows;
  } catch (error) {
    console.error("Error in 'getUserByUsername':", error);
    throw error;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserEmail,
  deleteUser,
  getUserByUsername,
};
