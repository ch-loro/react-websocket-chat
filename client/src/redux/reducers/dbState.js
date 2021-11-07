import * as c from 'lib/common';

const initialState = {
  DB: {},
};

function dbState(state = initialState, action) {
  switch (action.type) {
    case 'SET_DB': {
      let newDB = c.clone(state.DB);
      const key = action.key;
      const value = action.value;
      newDB[key] = value;
      return Object.assign({}, state, {
        DB: newDB,
      });
    }
    case 'RESET_DB': {
      let newDB = {};
      return Object.assign({}, state, {
        DB: newDB,
      });
    }
    default: {
      return state;
    }
  }
}

export default dbState;
