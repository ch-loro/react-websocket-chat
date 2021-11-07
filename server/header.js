require('dotenv').config();
require('dotenv').config({ path: '.env' });

exports.SERVER_ADDRESS = (process.env.SERVER_ADDRESS) ? String(process.env.SERVER_ADDRESS) : '127.0.0.1';
exports.SERVER_PORT = (process.env.SERVER_PORT) ? String(process.env.SERVER_PORT) : '5001';

exports.PROXY_SRV = (process.env.PROXY_SRV) ? String(process.env.PROXY_SRV) : '127.0.0.1';
exports.PROXY_PORT = (process.env.PROXY_PORT) ? String(process.env.PROXY_PORT) : '8080';
exports.PROXY_USER = (process.env.PROXY_USER) ? String(process.env.PROXY_USER) : 'username';
exports.PROXY_PASS = (process.env.PROXY_PASS) ? String(process.env.PROXY_PASS) : 'password';

exports.TIME_OUT = (process.env.TIME_OUT) ? parseInt(process.env.TIME_OUT, 10) : 60000;
