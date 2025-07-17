function emoteComposer(emoteObject) {
  return `<:${emoteObject.name}:${emoteObject.id}>`;
}

module.exports = { emoteComposer };
