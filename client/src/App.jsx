import React from 'react';
import reduxContainer from 'redux/container';
import 'css/App.css';

import { REDUX_TEST } from 'global';
import Chat from 'component/Chat';
import ReduxTest from 'redux/ReduxTest';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Chat />
        {REDUX_TEST ? <ReduxTest /> : ''}
      </div>
    );
  }
}

export default reduxContainer(App);
