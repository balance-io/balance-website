import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../styles';

class SubscribeForm extends Component {
  state = {
    status: null,
    message: null,
    input: ''
  };
  apiMailchimp = url =>
    fetch(url, {
      param: 'c'
    })
      .then(data => {
        if (data.result !== 'success') {
          this.setState({
            status: 'error',
            message: data.message
          });
        } else {
          this.setState({
            status: 'success',
            message: data.message
          });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({
            status: 'error',
            message: err
          });
        }
      });
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.input || this.state.input.length < 5 || this.state.input.indexOf('@') === -1) {
      this.setState({
        status: 'error'
      });
      return;
    }
    const url = `http://money.us11.list-manage.com/subscribe/post-json?u=a3f87e208a9f9896949b4f336&id=3985713da6&email=${encodeURIComponent(
      this.input.value
    )}`;
    this.setState(
      {
        status: 'sending',
        message: null
      },
      this.apiMailchimp(url)
    );
  };
  render() {
    const { messages, ...props } = this.props;
    return (
      <form onSubmit={this.onSubmit} method="post" noValidate {...props}>
        <input
          autoFocus
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
          type="email"
          required
          placeholder={messages.inputPlaceholder}
        />
        {this.state.status === 'sending' && <p color={colors.white}>{messages.sending}</p>}
        {this.state.status === 'success' && <p color={colors.green}>{messages.success}</p>}
        {this.state.status === 'error' && <p color={colors.red}>{messages.error}</p>}
      </form>
    );
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object.isRequired
};

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: 'type@your.email',
    sending: 'Sending...',
    success: 'Thanks! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong'
  }
};

export default SubscribeForm;
