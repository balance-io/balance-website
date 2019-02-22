import React from "react";
import { Card } from "rebass";

const Badge = props => (
  <Card
    color="freeSpeachGreen"
    bg="snowyMint"
    {...props}
    px={2}
    py={1}
    fontSize={1}
    fontFamily="graphik"
    borderRadius={9999}
    css={{
      display: "inline-block"
    }}
  />
);

export default Badge;
