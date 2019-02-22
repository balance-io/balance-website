import React, { useEffect, useState } from "react";
import { Text } from "rebass";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState(0);

  const fetchSubscribers = () =>
    fetch("/.netlify/functions/getMailchimpSubscribers")
      .then(res => res.json())
      .then(json => setSubscribers(json.stats.member_count));

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <Text fontSize={0} color="textLight" textAlign="center">
      {subscribers.toLocaleString()} subscribers
    </Text>
  );
};

export default Subscribers;
