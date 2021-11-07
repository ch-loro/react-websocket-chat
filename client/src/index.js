import React from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from 'redux/store';
import windowActions from 'redux/actions/windowActions';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.addEventListener('resize', () => {
  store.dispatch(windowActions.changewidth(window.innerWidth));
  store.dispatch(windowActions.changeheight(window.innerHeight));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
