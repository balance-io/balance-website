import React from "react";
import { Link } from "rebass";

const ExternalLink = props => (
  <Link
    {...props}
    rel="noopener noreferrer"
    target="_blank"
    css={{
      textDecoration: "none"
    }}
  />
);

export { ExternalLink };
