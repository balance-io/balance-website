import React from "react";
import { Link, Image } from "rebass";

import { useSiteMetadata } from "../../hooks";

import badge from "../../images/app-store-badge.svg";

const AppStoreBadge = () => {
  const { appStoreUrl } = useSiteMetadata();

  return (
    <Link href={appStoreUrl}>
      <Image
        css={`
          height: 48px;
          vertical-align: middle;
        `}
        src={badge}
      />
    </Link>
  );
};

export default AppStoreBadge;
