import React from 'react';
import PropTypes from 'prop-types';
import reduxContainer from 'redux/container';

import PostedLog from './logs/PostedLog';

class LogsView extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    logsState: PropTypes.shape({
      logs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          user: PropTypes.string.isRequired,
          text: PropTypes.string,
          image: PropTypes.any,
          like: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  render() {
    const logs = this.props.logsState.logs;
    const logsView = logs.map((log) => {
      return <PostedLog key={log.id} log={log} />;
    });

    return (
      <div className="LogsView">
        <div className="logs">{logsView}</div>
      </div>
    );
  }
}

export default reduxContainer(LogsView);
