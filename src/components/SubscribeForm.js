import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsonp from 'jsonp';
import styled from 'styled-components';
import inputSubmit from '../assets/input-submit.svg';
import { fonts, colors, transitions } from '../styles';

const SForm = styled.form`
  position: relative;
  width: 100%;
  height: 52px;

  & input {
    position: absolute;
    width: 100%;
    height: 52px;
    padding: 13px 51px 19px 16px;
    text-align: left;
    border: 0;
    font-family: inherit;
    font-weight: 500;
    -webkit-appearance: none;
    outline: none;
    font-size: 1.0625em;
    transition: 0.2s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 8px;
    color: ${({ dark }) => (dark ? '#FFFFFF' : '#313336')};
    background: ${({ dark }) => (dark ? '#3A4F65' : '#FFFFFF')};
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08),
      inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  & input::-webkit-input-placeholder {
    color: ${({ dark }) => (dark ? '#FFFFFF' : '#BDBDBE')};
  }

  & button {
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 52px;
    mask-image: url(${inputSubmit}) center no-repeat;
    -webkit-mask: url(${inputSubmit}) center no-repeat;
    background-size: 19px 17px;
    background-position: 0 0;
    background: ${({ dark }) => (dark ? '#FFFFFF' : '#313336')};
    cursor: pointer;
    transition: 0.2s;
    transform: translateX(2px) translateY(-0.5px);
  }
`;

const SMessage = styled.p`
  position: absolute;
  text-align: center;
  margin: 0 !important;
  bottom: -28px;
  font-size: ${fonts.medium};
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? 0.8 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;

let messageTimeout = null;

class SubscribeForm extends Component {
  state = {
    dark: true,
    status: '',
    message: '',
    input: ''
  };
  onChange = ({ target }) => {
    this.setState({ input: target.value });
  };
  onFocus = () => {
    this.setState({ dark: false });
  };
  onBlur = () => {
    if (!this.state.input) {
      this.setState({ dark: true });
    }
  };
  onStatusChange = state => {
    clearTimeout(messageTimeout);
    this.setState(state);
    if (state.status !== 'sending') {
      messageTimeout = setTimeout(
        () =>
          this.setState({
            status: '',
            message: ''
          }),
        3000
      );
    }
  };
  onSubmit = e => {
    const options = this.props.options;
    e.preventDefault();
    if (!this.state.input || this.state.input.length < 5 || this.state.input.indexOf('@') === -1) {
      this.onStatusChange({
        status: 'error',
        message: 'Email is invalid'
      });
      return;
    }
    const url = `//${options.server}.list-manage.com/subscribe/post-json?u=${options.userId}&id=${
      options.listId
    }&ORIGIN=${options.origin}&EMAIL=${encodeURIComponent(this.state.input)}`;
    this.onStatusChange(
      {
        status: 'sending',
        message: ''
      },
      () =>
        jsonp(url, { param: 'c' }, (err, data) => {
          let error = null;
          let result = null;
          if (err) {
            this.onStatusChange({
              status: 'error'
            });
          } else if (data.result !== 'success') {
            if (data.msg.includes('already subscribed')) {
              error = { message: 'EMAIL_ALREADY_SUBCRIBED' };
              this.onStatusChange({
                status: 'error',
                message: `Sorry, you've already signed up with this email`
              });
            } else if (data.msg.includes('too many recent signup requests')) {
              error = { message: 'TOO_MANY_SIGNUP_REQUESTS' };
              this.onStatusChange({
                status: 'error',
                message: `Too many signup requests, please try again later`
              });
            } else {
              error = { message: 'UNKNOWN_ERROR' };
              this.onStatusChange({
                status: 'error'
              });
            }
          } else {
            result = { email: this.state.input };
            this.onStatusChange({
              status: 'success'
            });
          }
          this.props.options.callback(error, result);
        })
    );
  };
  renderMessage = () => {
    if (!this.state.message) {
      switch (this.state.status) {
        case 'error':
          return this.props.messages.error;
        case 'success':
          return this.props.messages.success;
        case 'sending':
          return this.props.messages.sending;
        default:
          return '';
      }
    }
    return this.state.message;
  };
  render() {
    return (
      <SForm noValidate dark={this.state.dark} onSubmit={this.onSubmit}>
        <input
          required
          spellcheck="false"
          type="email"
          placeholder={this.props.messages.inputPlaceholder}
          value={this.state.input}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
        <button type="submit" />
        <SMessage
          color={this.state.status === 'error' ? colors.red : colors.white}
          show={this.state.status === 'error' || this.state.status === 'sending'}
        >
          {this.renderMessage()}
        </SMessage>
      </SForm>
    );
  }
}

SubscribeForm.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
  messages: PropTypes.objectOf(PropTypes.string)
};

SubscribeForm.defaultProps = {
  options: {
    server: 'money.us11',
    userId: 'a3f87e208a9f9896949b4f336',
    listId: '3985713da6',
    origin: ''
  },
  messages: {
    inputPlaceholder: 'Your email',
    sending: 'Sending...',
    success: 'Check your email',
    error: 'Oops, something went wrong'
  }
};

export default SubscribeForm;
