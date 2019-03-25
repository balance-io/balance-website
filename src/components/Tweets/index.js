import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Masonry from "react-masonry-component";

import { useSiteMetadata } from "../../hooks";

const Tweets = () => {
  const { tweets } = useSiteMetadata();

  return (
    <Masonry enableResizableChildren={true} options={{ gutter: 20 }}>
      {tweets.map((tweet, index) => (
        <TwitterTweetEmbed
          key={index}
          options={{
            conversation: "none",
            dnt: true,
            cards: "hidden",
            width: "100%"
          }}
          tweetId={tweet}
        />
      ))}
    </Masonry>
  );
};

export default Tweets;
