import { combineReducers } from 'redux';

import windowState from 'redux/reducers/windowState';
import dbState from 'redux/reducers/dbState';
import clientState from './reducers/clientState';
import logsState from './reducers/logsState';

const rootReducer = combineReducers({
  windowState: windowState,
  dbState: dbState,
  clientState: clientState,
  logsState: logsState,
});

export default rootReducer;
