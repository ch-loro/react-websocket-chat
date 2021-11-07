const logsActions = {
  addLog(id, user, text, image, like) {
    return {
      type: 'ADD_LOG',
      id,
      user,
      text,
      image,
      like,
    };
  },
  editLog(id, text, image, like) {
    return {
      type: 'EDIT_LOG',
      id,
      text,
      image,
      like,
    };
  },
  deleteLog(id) {
    return {
      type: 'DELETE_LOG',
      id,
    };
  },
  resetLogs() {
    return {
      type: 'RESET_LOGS',
    };
  },
};

export default logsActions;
