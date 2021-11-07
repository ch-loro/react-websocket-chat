const initialState = {
  user: '',
};

function clientState(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return Object.assign({}, state, {
        user: action.user,
      });
    }
    case 'RESET_USER': {
      return Object.assign({}, state, {
        user: '',
      });
    }
    default: {
      return state;
    }
  }
}

export default clientState;
