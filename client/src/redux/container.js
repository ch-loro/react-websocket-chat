import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import windowActions from './actions/windowActions';
import dbActions from './actions/dbActions';
import clientActions from './actions/clientActions';
import logsActions from './actions/logsActions';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    windowAct: bindActionCreators(windowActions, dispatch),
    dbAct: bindActionCreators(dbActions, dispatch),
    clientAct: bindActionCreators(clientActions, dispatch),
    logsAct: bindActionCreators(logsActions, dispatch),
  };
}

function reduxContainer(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

export default reduxContainer;
