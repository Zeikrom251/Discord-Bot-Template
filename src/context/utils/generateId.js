function generateID() {
  const characters = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  ];
  const id = [];

  for (let i = 0; i < 32; i++) {
    id.push(characters[Math.floor(Math.random() * characters.length)]);
  }

  const fullID = `${id.join('')}`;

  return fullID;
}

module.exports = { generateID };
// This function generates a random ID of 32 characters using alphanumeric characters.
// It can be used for various purposes, such as creating unique identifiers for users, sessions,
// or any other entities that require a unique ID in your application.
