const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

function windowState(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_WINDOW_WIDTH': {
      return Object.assign({}, state, {
        width: action.width,
        // action.width > MAX_WINDOW_WIDTH ? MAX_WINDOW_WIDTH : action.width,
      });
    }
    case 'CHANGE_WINDOW_HEIGHT': {
      return Object.assign({}, state, {
        height: action.height,
      });
    }
    default: {
      return state;
    }
  }
}

export default windowState;
