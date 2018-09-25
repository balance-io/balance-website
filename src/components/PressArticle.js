import React, { Component } from "react";
import styled from "styled-components";

import { colors } from "../styles";

const PressArticle = ({ date, outlet, link, headline }) => (
  <article>
    <date>{date}</date>
    <a target="_blank" rel="noopener" href={link}>
      <h4>{headline}</h4>
    </a>
    <p>{outlet}</p>
  </article>
);

export default PressArticle;
