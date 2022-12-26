const errors = {
  USER: {
    NOTEXISTENT: "Not existent USER!"
  },
  TODOS: {
    NOTEXISTENT: "Not existent TODO!",
    IDNOTVALID: "Not valid ID. Must be UUID"
  },
  PLAN: {
    OUTFREELIMITS: "Free limits run out. It's not possible to register TODO!"
  },
}

module.exports = errors;