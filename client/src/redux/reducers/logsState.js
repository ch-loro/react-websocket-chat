import * as c from 'lib/common';

const initialState = {
  logs: [],
};

function logsState(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LOG': {
      let newLogs = c.clone(state.Logs);
      newLogs.push({
        id: action.id,
        user: action.user,
        text: action.text,
        image: action.image,
        like: action.like,
      });
      return Object.assign({}, state, {
        logs: newLogs,
      });
    }
    case 'EDIT_LOG': {
      let newLogs = state.logs.map((log) => {
        if (action.id === log.id) {
          return {
            id: log.id,
            user: log.user,
            text: c.used(action.text) ? action.text : log.txt,
            image: c.used(action.image) ? action.image : log.image,
            like: c.used(action.like) ? action.like : log.like,
          };
        }
        return log;
      });
      return Object.assign({}, state, {
        logs: newLogs,
      });
    }
    case 'DELETE_LOG': {
      let newLogs = state.logs.map((log) => {
        if (action.id !== log.id) {
          return log;
        }
      });
      return Object.assign({}, state, {
        logs: newLogs,
      });
    }
    case 'RESET_LOGS': {
      let newLogs = [];
      return Object.assign({}, state, {
        logs: newLogs,
      });
    }
    default: {
      return state;
    }
  }
}

export default logsState;
