import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import jsonp from 'jsonp';
import emailIcon from '../assets/email-icon.svg';
import { fonts, colors, responsive, transitions } from '../styles';

const SFormWrapper = styled.div`
  position: relative;
  margin-bottom: 17px;
  width: 100%;
`;

const SMessage = styled.p`
  position: absolute;
  text-align: center;
  margin-top: 10px;
`;

const SText = styled.p`
  position: absolute;
  left: 60px;
  top: calc(50% - 9px);
  font-weight: 500;
  transition: ${transitions.base};
`;

const SForm = styled.form`
  & input {
    outline: none;
    margin: 0;
    font-size: ${fonts.large};
    padding: 18px 16px;
    width: 100%;
    border-radius: 10px;
    background ${({ white }) => (white ? `rgb(${colors.white})` : `rgb(${colors.blue})`)} ;
    color: ${({ white }) => (white ? `rgb(${colors.blue})` : `rgb(${colors.white})`)} ;
    padding-left: 54px;
    border: none;
    border-style: none;
    box-shadow: 0 10px 30px 0 rgba(${colors.black}, 0.1);
    transition: ${transitions.short};
    opacity: ${({ success }) => (success ? '0' : '1')};
    pointer-events: ${({ success }) => (success ? 'none' : 'auto')};
    visibility: ${({ success }) => (success ? 'hidden' : 'visible')};
    @media screen and (${responsive.sm.max}) {
      width: 100%;
    }
  }
  & input::placeholder {
    color: ${({ white }) => (white ? `rgba(${colors.blue}, 0.5)` : `rgba(${colors.white}, 0.5)`)} ;
  }
  &::before {
    content: '';
    transition: ${transitions.base};
    mask: url(${emailIcon}) no-repeat;
    mask-size: contain;
    background: ${({ white, success, hidden }) => {
      if (hidden) {
        return `rgb(${colors.lightGrey})`;
      } else if (success) {
        return `rgb(${colors.brightBlue})`;
      } else {
        return white ? `rgb(${colors.brightBlue})` : `rgb(${colors.white})`;
      }
    }};
    position: absolute;
    height: 20px;
    width: 20px;
    left: 20px;
    top: calc(50% - 5px);
  }
  & ${SText} {
    color: ${({ hidden }) => (hidden ? `rgb(${colors.lightGrey})` : `rgb(${colors.brightBlue})`)};
    opacity: ${({ success, hidden }) => (success || hidden ? '1' : '0')};
    pointer-events: ${({ success, hidden }) => (success || hidden ? 'auto' : 'none')};
    visibility: ${({ success, hidden }) => (success || hidden ? 'visible' : 'hidden')};
  }
`;

class SubscribeForm extends Component {
  state = {
    status: null,
    message: null,
    hidden: this.props.hidden,
    input: ''
  };
  onSubmit = e => {
    const options = this.props.options;
    e.preventDefault();
    if (!this.state.input || this.state.input.length < 5 || this.state.input.indexOf('@') === -1) {
      this.setState({
        status: 'error'
      });
      return;
    }
    const url = `//${options.server}.list-manage.com/subscribe/post-json?u=${options.userId}&id=${options.listId}&ORIGIN=${options.origin}&EMAIL=${encodeURIComponent(
      this.state.input
    )}`;
    this.setState(
      {
        status: 'sending',
        message: null
      },
      () =>
        jsonp(url, { param: 'c' }, (err, data) => {
          if (err) {
            this.setState({
              status: 'error',
              msg: err
            });
          } else if (data.result !== 'success') {
            this.setState({
              status: 'error',
              msg: data.msg
            });
          } else {
            this.setState({
              status: 'success',
              msg: data.msg
            });
          }
        })
    );
  };
  render() {
    const { messages, white, ...props } = this.props;
    const { input, status, hidden } = this.state;
    return (
      <SFormWrapper>
        <SForm
          hidden={this.state.hidden}
          white={white}
          success={status === 'success'}
          onSubmit={this.onSubmit}
          method="POST"
          noValidate
          {...props}
        >
          {status === 'success' && <SText>Check your email</SText>}
          {hidden && <SText onClick={() => this.setState({ hidden: false })}>Get balance news</SText>}
          <input
            value={input}
            onChange={e => this.setState({ input: e.target.value })}
            type="email"
            required
            placeholder={messages.inputPlaceholder}
          />
          {status === 'sending' && <SMessage color={colors.white}>{messages.sending}</SMessage>}
          {status === 'error' && <SMessage color={colors.red}>{messages.error}</SMessage>}
        </SForm>
      </SFormWrapper>
    );
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  white: PropTypes.bool,
  hidden: PropTypes.bool
};

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: 'type@your.email',
    sending: 'Sending...',
    success: 'Thanks! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong'
  },
  white: false,
  hidden: false
};

export default SubscribeForm;
