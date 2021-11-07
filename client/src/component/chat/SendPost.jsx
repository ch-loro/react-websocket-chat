import React from 'react';
import PropTypes from 'prop-types';
import reduxContainer from 'redux/container';

class SendPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  static propTypes = {
    clientState: PropTypes.shape({
      user: PropTypes.string.isRequired,
    }).isRequired,
  };

  handleChangeText(text) {
    this.setState({ text });
  }

  handlePostMessage() {}

  render() {
    let text = this.state.text;

    return (
      <div className="SendPost">
        <span>{this.props.clientState.user}: </span>
        <input
          type="text"
          value={text}
          onChange={(e) => this.handleChangeText(e.target.value)}
        />
        <button disabled={!text} onClick={this.handlePostMessage}>
          POST
        </button>
      </div>
    );
  }
}

export default reduxContainer(SendPost);
