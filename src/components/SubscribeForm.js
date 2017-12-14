import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import jsonp from 'jsonp';
import emailIcon from '../assets/email-icon.svg';
import { fonts, colors, responsive, transitions } from '../styles';

const SFormWrapper = styled.div`
  position: relative;
  margin-bottom: 17px;
`;

const SMessage = styled.p`
  position: absolute;
  text-align: center;
  margin-top: 10px;
  font-size: ${fonts.h6};
`;

const SSuccess = styled.p`
  position: absolute;
  left: 60px;
  top: calc(50% - 9px);
  font-weight: 500;
  transition: ${transitions.base};
  color: rgb(${colors.brightBlue});
`;

const StyledSubmit = styled.button`
  outline: none;
  border-style: none;
  border: none;
  font-size: ${fonts.large};
  padding: 6px 14px;
  background: none;
  color: rgb(${colors.white});
  border: 2px solid rgb(${colors.white});
  position: absolute;
  border-radius: 8px;
  top: 64px;
  right: 0;
  @media screen and (${responsive.md.min}) {
    top: auto;
    right: auto;
    padding: 18px 24px;
    margin: 0 8px;
  }
`;

const SForm = styled.form`
  & input {
    outline: none;
    margin: 0;
    font-size: ${fonts.large};
    padding: 18px 16px;
    width: 360px;
    border-radius: 10px;
    background: rgb(${colors.blue});
    color: rgb(${colors.white});
    padding-left: 54px;
    border: none;
    border-style: none;
    transition: ${transitions.short};
    opacity: ${({ success }) => (success ? '0' : '1')};
    pointer-events: ${({ success }) => (success ? 'none' : 'auto')};
    visibility: ${({ success }) => (success ? 'hidden' : 'visible')};
    @media screen and (${responsive.sm.max}) {
      width: 100%;
    }
  }
  & input::placeholder {
    color: rgba(${colors.white}, 0.5);
  }
  &::before {
    content: '';
    transition: ${transitions.base};
    mask-image: url(${emailIcon}) no-repeat;
    -webkit-mask: url(${emailIcon}) no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background: rgb(${colors.white});
    background: ${({ success }) =>
      success ? `rgb(${colors.brightBlue})` : `rgb(${colors.white})`};
    position: absolute;
    height: 20px;
    width: 20px;
    left: 20px;
    top: calc(50% - 5px);
  }
  & ${SSuccess} {
    opacity: ${({ success }) => (success ? '1' : '0')};
    pointer-events: ${({ success }) => (success ? 'auto' : 'none')};
    visibility: ${({ success }) => (success ? 'visible' : 'hidden')};
  }
`;

class SubscribeForm extends Component {
  state = {
    status: null,
    message: null,
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
    const url = `//${options.server}.list-manage.com/subscribe/post-json?u=${options.userId}&id=${
      options.listId
    }&ORIGIN=${options.origin}&EMAIL=${encodeURIComponent(this.state.input)}`;
    this.setState(
      {
        status: 'sending',
        message: null
      },
      () =>
        jsonp(url, { param: 'c' }, (err, data) => {
          if (err) {
            this.setState({
              status: 'error'
            });
          } else if (data.result !== 'success') {
            if (data.msg.includes('already subscribed')) {
              this.setState({
                status: 'error',
                message: `Sorry, you've already signed up with this email`
              });
            } else if (data.msg.includes('too many recent signup requests')) {
              this.setState({
                status: 'error',
                message: `Too many signup requests, please try again later`
              });
            } else {
              this.setState({
                status: 'error'
              });
            }
          } else {
            this.setState({
              status: 'success'
            });
          }
        })
    );
  };
  getEmailClient = () => this.state.input.match(/@(\w|.)+/gi)[0].replace('@', '');
  render() {
    const { messages, ...props } = this.props;
    return (
      <SFormWrapper>
        <SForm
          success={this.state.status === 'success'}
          onSubmit={this.onSubmit}
          method="POST"
          noValidate
          {...props}
        >
          {this.state.status === 'success' && (
            <SSuccess>
              <a href={`http://${this.getEmailClient()}`} target="_blank">
                Check your email
              </a>
            </SSuccess>
          )}
          <input
            value={this.state.input}
            onChange={e => this.setState({ status: null, input: e.target.value })}
            type="email"
            required
            placeholder={messages.inputPlaceholder}
          />
          {!this.state.status &&
            this.state.input && <StyledSubmit type="submit">Send</StyledSubmit>}
          {this.state.status === 'sending' && (
            <SMessage color={colors.white}>{messages.sending}</SMessage>
          )}
          {this.state.status === 'error' && (
            <SMessage color={colors.red}>
              {this.state.message ? this.state.message : messages.error}
            </SMessage>
          )}
        </SForm>
      </SFormWrapper>
    );
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.objectOf(PropTypes.string).isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired
};

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: 'type@your.email',
    sending: 'Sending...',
    success:
      'Thanks! Please click the link in the confirmation email to complete your subscription.',
    error: 'Oops, something went wrong'
  }
};

export default SubscribeForm;
