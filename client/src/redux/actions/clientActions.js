const clientActions = {
  setUser(user) {
    return {
      type: 'SET_USER',
      user,
    };
  },
  resetUser() {
    return {
      type: 'RESET_USER',
    };
  },
};

export default clientActions;
