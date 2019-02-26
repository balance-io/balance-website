import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Masonry from "react-masonry-component";

import tweets from "../../data/tweets.json";

const Tweets = () => (
  <Masonry enableResizableChildren={true} options={{ gutter: 20 }}>
    {tweets.map((tweet, index) => (
      <TwitterTweetEmbed
        key={index}
        options={{ conversation: "none", dnt: true, cards: "hidden" }}
        tweetId={tweet}
      />
    ))}
  </Masonry>
);

export default Tweets;
