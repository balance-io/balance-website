import React, { useState, useEffect } from "react";
import { Heading, Card, Flex, Button, Text } from "rebass";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { useInput } from "react-hanger";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState(0);

  const fetchSubscribers = () =>
    fetch("/.netlify/functions/getMailchimpSubscribers")
      .then(res => res.json())
      .then(json => setSubscribers(json.stats.member_count))
      .catch(err => {
        console.log(err);
        setSubscribers(4000);
      });

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <Text fontSize={0} color="textLight" textAlign="center">
      {subscribers.toLocaleString()} subscribers
    </Text>
  );
};

const Community = () => {
  const email = useInput("");

  const [result, setResult] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await addToMailchimp(email.value);

    await setResult(response);

    await window.alert(JSON.stringify(result, null, 2));
  };

  return (
    <>
      <Heading textAlign="center" fontWeight={2} fontSize={3}>
        Join the <strong>Balance Community</strong>
      </Heading>

      <Flex justifyContent="center" my={3}>
        <Card
          p={1}
          borderRadius={6.4}
          border="1px solid #d6d6d6"
          bg="#fafbfc"
          boxShadow="0 2px 3px 0 rgba(241, 241, 241, 0.5)"
        >
          <Flex as="form" onSubmit={handleSubmit}>
            <Card
              as="input"
              placeholder="your@email.com"
              value={email.value}
              onChange={email.onChange}
              type="email"
              required
              mr={1}
              bg="transparent"
              p={0}
              pl={2}
              border="none"
              flex="1"
            />

            <Button type="submit" variant="foam">
              Join us
            </Button>
          </Flex>
        </Card>
      </Flex>

      <Subscribers />
    </>
  );
};

export default Community;
