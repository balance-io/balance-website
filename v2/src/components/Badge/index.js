import React from "react";
import { Card } from "rebass";

const Badge = props => (
  <Card
    color="white"
    bg="blue"
    {...props}
    px={3}
    py={1}
    borderRadius={9999}
    css={{
      display: "inline-block"
    }}
  />
);

export default Badge;
