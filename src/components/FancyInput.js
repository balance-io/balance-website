import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import inputSubmit from '../assets/input-submit.svg'

const SInputContainer = styled.div`
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
  	transition: .2s;
  	-webkit-tap-highlight-color: rgba(0,0,0,0);
    border-radius: 8px;
    color: ${({ dark }) => dark ? '#FFFFFF' : '#313336'};
    background: ${({ dark }) => dark ? '#3A4F65' : '#FFFFFF'};
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.11), 0 1px 3px 0 rgba(0,0,0,0.08), inset 0 0 1px 0 rgba(0,0,0,0.06);
  }

  & input::-webkit-input-placeholder {
    color: ${({ dark }) => dark ? '#FFFFFF' : '#BDBDBE'};
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
    background: ${({ dark }) => dark ? '#FFFFFF' : '#313336'};
    cursor: pointer;
    transition: .2s;
    transform: translateX(2px) translateY(-.5px);
  }
`;



class FancyInput extends Component {
  state = {
    dark: true,
    input: ''
  }
  onChange = ({ target }) => {
    this.setState({ input: target.value })
    this.props.onChange(target.value)
  }
  onFocus = () => {
    console.log('onFocus');
    this.setState({ dark: false })
  }
  onBlur = () => {
    console.log('onBlur');
    if (!this.state.input) {
      this.setState({ dark: true })
    }
  }
  render() {
    return (
      <SInputContainer dark={this.state.dark}>
        <input type="email" placeholder="Your email" spellcheck="false" value={this.state.input} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />
        <button type="submit" />
      </SInputContainer>
    )
  }
}

FancyInput.propTypes = {
  onChange: PropTypes.func
}

FancyInput.defaultProps = {
  onChange: () => {}
}


export default FancyInput
