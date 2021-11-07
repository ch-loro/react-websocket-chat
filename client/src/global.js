export const NULL = null;
export const NA = null;

export const MOBILE_WIDTH = 768;
export const MAX_WINDOW_WIDTH = 960;

export const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDLESS
  ? String(process.env.REACT_APP_SERVER_ADDLESS)
  : '127.0.0.1';
export const SERVER_PORT = process.env.REACT_APP_SERVER_PORT
  ? String(process.env.REACT_APP_SERVER_PORT)
  : '5001';

export const PROXY_SRV = process.env.REACT_APP_PROXY_SRV
  ? String(process.env.REACT_APP_PROXY_SRV)
  : '127.0.0.1';
export const PROXY_PORT = process.env.REACT_APP_PROXY_PORT
  ? String(process.env.REACT_APP_PROXY_PORT)
  : '8080';
export const PROXY_USER = process.env.REACT_APP_PROXY_USER
  ? String(process.env.REACT_APP_PROXY_USER)
  : 'username';
export const PROXY_PASS = process.env.REACT_APP_PROXY_PASS
  ? String(process.env.REACT_APP_PROXY_PASS)
  : 'password';

export const TIME_OUT = process.env.REACT_APP_TIMEOUT
  ? parseInt(process.env.TIME_OUT, 10)
  : 60000;

export const REDUX_TEST = process.env.REACT_APP_REDUX_TEST
  ? Boolean(process.env.REACT_APP_REDUX_TEST)
  : false;
