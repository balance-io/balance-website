import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import balanceCircleLogo from '../assets/balance-circle-logo.svg';
import aragon from '../assets/tokens/aragon.svg';
import augur from '../assets/tokens/augur.svg';
import zrx from '../assets/tokens/zrx.svg';
import district0x from '../assets/tokens/district0x.svg';
import gnosis from '../assets/tokens/gnosis.svg';
import golem from '../assets/tokens/golem.svg';
import maker from '../assets/tokens/maker.svg';
import melonport from '../assets/tokens/melonport.svg';
import { colors, fonts, transitions } from '../styles';

const generateCycleAnimation = ({ totalItems, pauseDuration, spinDuration, clockwise = true }) => {
  const items = (Array(totalItems).join('0') + '0').split('');
  const cycleDuration = pauseDuration + spinDuration;
  const totalDuration = cycleDuration * totalItems;
  const totalPercentage = 100;
  const cyclePercentage = totalPercentage / totalItems;
  const pausePercentage = pauseDuration / cycleDuration * cyclePercentage;
  const totalAngle = 360;
  const cycleAngle = totalAngle / totalItems;

  let animationString = items
    .map((item, index, arr) => {
      const cycleNumber = index + 1;
      const currentCyclePercentage = cycleNumber * cyclePercentage;

      const spinStartPercentage = Number(currentCyclePercentage - cyclePercentage).toPrecision(4);
      const spinStopPercentage = Number(
        currentCyclePercentage - pausePercentage - 0.01
      ).toPrecision(4);
      const pauseStartPercentage = Number(currentCyclePercentage - pausePercentage).toPrecision(4);
      const pauseStopPercentage = Number(currentCyclePercentage - 0.01).toPrecision(4);

      const currentCycleAngle = cycleNumber * cycleAngle;
      const spinStartAngle = currentCycleAngle - cycleAngle;
      const spinStopAngle = currentCycleAngle;

      const direction = clockwise ? 1 : -1;

      return `
      ${spinStartPercentage}% {
        transform: rotate(${spinStartAngle * direction}deg);
      }
      ${spinStopPercentage}% {
        transform: rotate(${spinStopAngle * direction}deg);
      }
      ${pauseStartPercentage}% {
        transform: rotate(${spinStopAngle * direction}deg);
      }
      ${pauseStopPercentage}% {
        transform: rotate(${spinStopAngle * direction}deg);
      }
    `;
    })
    .join('');

  const animation = keyframes`${animationString}`;

  return `${animation} ${totalDuration}s ease infinite`;
};

const generatePopupAnimation = ({ index, popupShift, totalItems, pauseDuration, spinDuration }) => {
  const cycleDuration = pauseDuration + spinDuration;
  const totalDuration = cycleDuration * totalItems;
  const totalPercentage = 100;
  const cyclePercentage = totalPercentage / totalItems;
  const pausePercentage = pauseDuration / cycleDuration * cyclePercentage;

  function shiftNumber(number, shift, max) {
    const inc = number + shift;
    if (inc < 1) {
      return max - Math.abs(inc);
    } else if (inc > max) {
      return inc - max;
    }
    return inc;
  }

  const cycleNumber = shiftNumber(index + 1, popupShift, totalItems);
  const indexedCyclePercentage = cyclePercentage - (cycleNumber - 1) * cyclePercentage;

  const pauseStartPercentage = Number(indexedCyclePercentage - pausePercentage).toPrecision(4);
  const beforePauseStartPercentage = Number(pauseStartPercentage - 1).toPrecision(4);
  const pauseStopPercentage = Number(indexedCyclePercentage - 1).toPrecision(4);
  const afterPauseStopPercentage = Number(indexedCyclePercentage).toPrecision(4);

  const animationString = `
      ${shiftNumber(beforePauseStartPercentage, 0, 100)}% {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
      ${shiftNumber(pauseStartPercentage, 0, 100)}% {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      ${shiftNumber(pauseStopPercentage, 0, 100)}% {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      ${shiftNumber(afterPauseStopPercentage, 0, 100)}% {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    `;

  const animation = keyframes`${animationString}`;

  return `${animation} ${totalDuration}s ease infinite`;
};

const expandAnimation = (angle, circleSize) =>
  keyframes`
  0% {
    transform:
      rotate(${angle - 90}deg)
      translate(0)
      rotate(${-angle + 90}deg);
  }
  100% {
    transform:
    rotate(${angle}deg)
    translate(calc(${circleSize}px / 2))
    rotate(${-angle}deg)
  }
`;

const reverseZIndex = keyframes`
  0% { z-index: 0; }
  80% { z-index: -1; }
  100% { z-index: -1; }
`;

const tokenList = [
  {
    name: 'Melonport',
    logo: melonport,
    description: 'Asset management',
    url: 'https://melonport.com'
  },
  {
    name: 'Golem',
    logo: golem,
    description: 'World computer',
    url: 'https://golem.network'
  },
  {
    name: 'Gnosis',
    logo: gnosis,
    description: 'Crowd insight',
    url: 'https://gnosis.pm'
  },
  {
    name: 'Aragon',
    logo: aragon,
    description: 'Governance tools',
    url: 'https://aragon.one'
  },
  {
    name: '0x Protocol',
    logo: zrx,
    description: 'Decentralized exchange',
    url: 'https://0xproject.com'
  },
  {
    name: 'District 0x',
    logo: district0x,
    description: 'Community tools',
    url: 'district0x.io'
  },
  {
    name: 'Augur',
    logo: augur,
    description: 'Prediction markets',
    url: 'augur.com'
  },
  {
    name: 'Maker',
    logo: maker,
    description: 'Stable $1 token',
    url: 'makerdao.com'
  }
];

const StyledWrapper = styled.div`
  width: ${({ circleSize, itemSize }) => `${circleSize + itemSize * 2}px`};
  height: ${({ circleSize, itemSize }) => `${circleSize + itemSize * 2}px`};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const STokenDescription = styled.div`
  transition: ${transitions.long};
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  left: 50%;
  right: auto;
  padding-left: 60%;
  padding-right: 0;
  text-align: left;
  border-radius: 0 8px 8px 0;
  font-size: ${fonts.small};
  color: rgb(${colors.white});
  background: rgb(39, 44, 51);
  & > div:first-of-type {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    width: 150px;
    & > p:first-of-type {
      font-weight: 700;
      padding-bottom: 0.2em;
      margin-top: -0.2em;
    }
    & > p:last-of-type {
      font-size: ${fonts.small};
    }
  }
  & > div:last-of-type {
    height: 100%;
    border-radius: 0 8px 8px 0;
    background: rgb(74, 78, 83);
    display: flex;
    padding: 0 10px;
    align-items: center;
  }
`;

const STokenDescriptionDuplicate = styled(STokenDescription)`
  animation: none !important;
`;

const STokenContent = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (hover: hover) {
    &:hover ${STokenDescriptionDuplicate} {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }
  }
`;

const STokenLogo = styled.div`
  display: block;
  position: absolute;
  width: ${({ itemSize }) => `${itemSize}px`};
  height: ${({ itemSize }) => `${itemSize}px`};
  top: 50%;
  left: 50%;
  margin: calc((40px / 2) * -1);
  animation: ${({ index, circleSize, totalItems }) => {
    const angle = index * (360 / totalItems);
    return `${expandAnimation(angle, circleSize)} 2s ease 1`;
  }};
  transform: ${({ index, circleSize, totalItems }) => {
    const angle = index * (360 / totalItems);
    return `rotate(${angle}deg)
      translate(calc(${circleSize}px / 2))
      rotate(${-angle}deg)`;
  }};
  ${STokenDescription} {
    animation: ${({ index, popupShift, totalItems, pauseDuration, spinDuration }) =>
      generatePopupAnimation({
        index,
        popupShift,
        totalItems,
        pauseDuration,
        spinDuration
      })};
  }
`;

const SInnerCircle = styled.img`
  position: absolute;
  z-index: -1;
  animation: ${reverseZIndex} 2s ease 1;
  width: ${({ circleSize }) => `${circleSize * 0.4}px`};
  height: ${({ circleSize }) => `${circleSize * 0.4}px`};
`;

const SOuterCircle = styled.div`
  position: relative;
  width: ${({ circleSize }) => `${circleSize}px`};
  height: ${({ circleSize }) => `${circleSize}px`};
  animation: ${({ totalItems, pauseDuration, spinDuration }) =>
    generateCycleAnimation({ totalItems, pauseDuration, spinDuration, clockwise: true })};
  ${STokenContent} {
    animation: ${({ totalItems, pauseDuration, spinDuration }) =>
      generateCycleAnimation({ totalItems, pauseDuration, spinDuration, clockwise: false })};
  }
`;

class TokenAnimation extends Component {
  render() {
    return (
      <StyledWrapper circleSize={this.props.circleSize} itemSize={this.props.itemSize}>
        <SOuterCircle
          circleSize={this.props.circleSize}
          totalItems={this.props.tokens.length}
          pauseDuration={this.props.pauseDuration}
          spinDuration={this.props.spinDuration}
        >
          {this.props.tokens.map((token, index, arr) => (
            <STokenLogo
              key={token.name}
              index={index}
              totalItems={arr.length}
              circleSize={this.props.circleSize}
              popupShift={this.props.popupShift}
              pauseDuration={this.props.pauseDuration}
              spinDuration={this.props.spinDuration}
              itemSize={this.props.itemSize}
            >
              <STokenContent>
                <img src={token.logo} alt={token.name} />
                <STokenDescription>
                  <div>
                    <p>{token.name.toUpperCase()}</p>
                    <p>{token.description}</p>
                  </div>
                  <div>
                    <a href={token.url} rel="noreferrer noopener" target="_blank">
                      {token.url.replace(/(https?:\/\/)/g, '')}
                    </a>
                  </div>
                </STokenDescription>
                <STokenDescriptionDuplicate>
                  <div>
                    <p>{token.name.toUpperCase()}</p>
                    <p>{token.description}</p>
                  </div>
                  <div>
                    <a href={token.url} rel="noreferrer noopener" target="_blank">
                      {token.url.replace(/(https?:\/\/)/g, '')}
                    </a>
                  </div>
                </STokenDescriptionDuplicate>
              </STokenContent>
            </STokenLogo>
          ))}
        </SOuterCircle>
        <SInnerCircle circleSize={this.props.circleSize} src={balanceCircleLogo} />
      </StyledWrapper>
    );
  }
}

TokenAnimation.propTypes = {
  circleSize: PropTypes.number,
  itemSize: PropTypes.number,
  tokens: PropTypes.array,
  pauseDuration: PropTypes.number,
  spinDuration: PropTypes.number
};

TokenAnimation.defaultProps = {
  circleSize: 450,
  itemSize: 50,
  tokens: tokenList,
  popupShift: 4,
  pauseDuration: 3,
  spinDuration: 1
};

export default TokenAnimation;
