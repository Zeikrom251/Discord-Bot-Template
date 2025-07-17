// Mutation functions for the users table
// -------------------------------------------------------------
// insertUserQuery: Dynamically inserts a new user with provided fields
// updateUserQuery: Dynamically updates user fields by user ID
// Both functions use parameterized queries for safety and flexibility

/**
 * Example usage:
 *
 * // Insert a new user
 * const newUser = {
 *   username: 'Alice',
 *   email: 'alice@example.com',
 *   password: 'hashedpassword123'
 * };
 * const result = await insertUserQuery(newUser);
 *
 * // Update a user's email and password
 * const userId = 42;
 * const updates = {
 *   email: 'alice@newdomain.com',
 *   password: 'newhashedpassword456'
 * };
 * await updateUserQuery(userId, updates);
 */

const { db } = require('../../../handlers/loadDataBase');

async function insertUserQuery(userData) {
  try {
    const columns = Object.keys(userData);
    const placehorders = columns.map(() => '?').join(', ');
    const values = Object.values(userData);

    const query = `INSERT INTO users (${columns.join(
      ', '
    )}) VALUES (${placehorders})`;

    const [result] = await db.query(query, values);

    return result;
  } catch (error) {
    console.error("Erreur lors de la requête 'insertUserQuery' :", error);
    throw error;
  }
}

async function updateUserQuery(userId, userData) {
  try {
    const setClauses = Object.keys(userData)
      .map((key) => `${key} = ?`)
      .join(', ');
    const values = Object.values(userData);

    values.push(userId);

    const query = `UPDATE users SET ${setClauses} WHERE id = ?`;
    await db.query(query, values);
  } catch (error) {
    console.error("Erreur lors de la requête 'updateUserQuery' :", error);
    throw error;
  }
}

module.exports = {
  insertUserQuery,
  updateUserQuery,
};
