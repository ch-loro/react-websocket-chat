import React from 'react';
import reduxContainer from 'redux/container';

import LogsView from './chat/LogsView';
import SendPost from './chat/SendPost';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Chat">
        <LogsView />
        <SendPost />
      </div>
    );
  }
}

export default reduxContainer(Chat);
