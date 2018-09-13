import React, { Component } from "react";
import styled from "styled-components";

import { colors, fonts, transitions, responsive } from "../styles";

const STeamMember = styled.div`
  width: 64px;
  height: 64px;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ selected }) =>
    selected
      ? `rgba(${colors.brightBlue}, 0.8)`
      : `rgba(${colors.brightBlue}, 0)`};
  }
  & img {
    border-radius: 50%;
    width: 100%;
  }
`;

const TeamMember = ({ selected, image, name, onClick }) => (
  <STeamMember onClick={onClick} selected={selected}>
    <img src={image} alt={name} />
  </STeamMember>
);

export default TeamMember;
