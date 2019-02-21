import React from "react";
import { Link } from "rebass";

const ExternalLink = ({ href, children, ...rest }) => (
  <Link
    href={href}
    css={`
      text-decoration: none;
    `}
    rel="noopener noreferrer"
    target="_blank"
    {...rest}
  >
    {children}
  </Link>
);

export { ExternalLink };
