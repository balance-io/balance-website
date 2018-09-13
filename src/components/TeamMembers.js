import React, { Component } from "react";
import styled from "styled-components";
import TeamMember from "./TeamMember";
import cardArrow from "../assets/card-arrow.png";
import { colors, fonts, transitions, responsive } from "../styles";
import team from "../data/team";

const SProfile = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  & p {
    color: rgb(${colors.darkTwo});
  }
  & p:first-child {
    font-size: 0.9em;
    font-weight: 600;
  }
  & p:nth-child(2) {
    font-size: 0.75em;
    font-weight: 500;
    color: rgba(${colors.darkTwo}, 0.9);
  }
  & span {
    color: rgba(${colors.darkTwo}, 0.2);
  }
  @media screen and (${responsive.sm.max}) {
    & p:first-child {
      font-size: 0.9em;
    }
    & p:nth-child(2) {
      font-size: 0.75em;
    }
  }
`;

const SCardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px;
`;

const STeamWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (${responsive.md.max}) {
    display: flex;
    align-items: left;
  }
`;

const SCardEmojis = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
`;

const SEmoji = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  & img {
    height: 100%;
  }
`;

const SCard = styled.div`
  transition: ${transitions.base};
  width: 100%;
  position: relative;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 6px;
  background-color: rgb(${colors.white});
  transform: ${({ selected }) => {
    switch (selected) {
      case 0:
        return `translate3d(0, 0, 0)`;
      case 1:
        return `translate3d(0, 0, 0)`;
      case 2:
        return `translate3d(27px, 0, 0)`;
      case 3:
        return `translate3d(70px, 0, 0)`;
      case 4:
        return `translate3d(70px, 0, 0)`;
      default:
        return `translate3d(0, 0, 0)`;
    }
  }};
  & > img {
    transition: ${transitions.base};
    width: 30px;
    top: -4px;
    position: absolute;
    left: ${({ selected }) => {
      switch (selected) {
        case 0:
          return `18px`;
        case 1:
          return `95px`;
        case 2:
          return `calc(50% - 15px)`;
        case 3:
          return `178px`;
        case 4:
          return `256px`;
        default:
          return `calc(50% - 15px)`;
      }
    }};
  }
  & h3 {
    margin-top: 12px;
  }
  & a {
    color: rgb(${colors.lightBrightBlue});
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
    max-width: none;
    transform: none;
    & > img {
      left: ${({ selected }) => {
        switch (selected) {
          case 0:
            return `calc(6% - 15px)`;
          case 1:
            return `calc(28% - 15px)`;
          case 2:
            return `calc(50% - 15px)`;
          case 3:
            return `calc(71% - 15px)`;
          case 4:
            return `calc(94% - 15px)`;
          default:
            return `calc(50% - 15px)`;
        }
      }};
    }
  }
`;

const SCardDescription = styled.div`
  font-size: ${fonts.small};
  color: rgba(${colors.darker}, 0.95);
  line-height: 1.31;
  text-align: left;
  border-top: 2px solid rgba(${colors.grey}, 0.1);
  width: 100%;
  padding: 16px;
`;

const STeam = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  margin: 12px;
  @media screen and (max-width: 220px) {
    width: 100%;
    max-width: none;
  }
`;

const SCardWrapper = styled.div`
  width: 100%;
  max-width: 395px;
  @media screen and (max-width: 400px) {
    width: 100%;
    max-width: none;
  }
`;

let timeout = null;

class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  onChangeSelected = index => {
    clearTimeout(timeout);
    if (index || index === 0) {
      this.setState({ selected: index });
    } else {
      let next =
        this.state.selected + 1 > team.length - 1 ? 0 : this.state.selected + 1;
      this.setState({ selected: next });
    }
  };

  render() {
    return (
      <STeamWrapper>
        <STeam>
          {team.map((member, idx) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.profileImg}
              selected={this.state.selected === idx}
              onClick={() => this.onChangeSelected(idx)}
            />
          ))}
        </STeam>
        <SCardWrapper>
          <SCard selected={this.state.selected}>
            <img src={cardArrow} alt="arrow" />
            <SCardHeader>
              <SProfile>
                <p>{team[this.state.selected].name}</p>
                <p>
                  {team[this.state.selected].role}
                  <span>{" | "}</span>
                  <a
                    href={`https://twitter.com/${
                      team[this.state.selected].twitter
                    }`}
                  >{`@${team[this.state.selected].twitter}`}</a>
                </p>
              </SProfile>
              <SCardEmojis>
                {team[this.state.selected].emojis.map(emoji => (
                  <SEmoji key={emoji.name}>
                    <img src={emoji.img} alt={emoji.name} />
                  </SEmoji>
                ))}
              </SCardEmojis>
            </SCardHeader>

            <SCardDescription>
              {team[this.state.selected].description}
            </SCardDescription>
          </SCard>
        </SCardWrapper>
      </STeamWrapper>
    );
  }
}

export default TeamMembers;
