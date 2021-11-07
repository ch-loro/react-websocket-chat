import React from 'react';
import PropTypes from 'prop-types';
import reduxContainer from 'redux/container';

//import * as c from 'lib/common';

class _Component extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    _props: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className="_Component">
        <span />
      </div>
    );
  }
}

export default reduxContainer(_Component);
