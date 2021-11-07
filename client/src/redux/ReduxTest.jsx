import React from 'react';
import PropTypes from 'prop-types';
import reduxContainer from 'redux/container';

import * as c from 'lib/common';

class ReduxTest extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    /* Reducers */
    windowState: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    dbState: PropTypes.shape({
      DB: PropTypes.object.isRequired,
    }).isRequired,
    clientState: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
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
    /* Actions */
    windowAct: PropTypes.shape({
      changewidth: PropTypes.func.isRequired,
      changeheight: PropTypes.func.isRequired,
    }).isRequired,
    dbAct: PropTypes.shape({
      setDB: PropTypes.func.isRequired,
      resetDB: PropTypes.func.isRequired,
    }).isRequired,
    clientAct: PropTypes.shape({
      setUser: PropTypes.func.isRequired,
      resetUser: PropTypes.func.isRequired,
    }).isRequired,
    logsAct: PropTypes.shape({
      addLog: PropTypes.func.isRequired,
      editLog: PropTypes.func.isRequired,
      deleteLog: PropTypes.func.isRequired,
      resetLogs: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          <b>windowState</b>: {c.toString(this.props.windowState)}
        </div>
        <div>
          <b>dbState</b>: {c.toString(this.props.dbState)}
        </div>
        <div>
          <b>clientState</b>: {c.toString(this.props.clientState)}
        </div>
        <div>
          <b>logsState</b>: {c.toString(this.props.logsState)}
        </div>
      </div>
    );
  }
}

export default reduxContainer(ReduxTest);
