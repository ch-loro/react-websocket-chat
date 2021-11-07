const dbActions = {
  setDB(key, value) {
    return {
      type: 'SET_DB',
      key,
      value,
    };
  },
  resetDB() {
    return {
      type: 'RESET_DB',
    };
  },
};

export default dbActions;
