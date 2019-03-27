import React, { useState, useEffect } from "react";
import { Card, Flex, Button, Text, Box } from "rebass";
import addToMailchimp from "../../../plugins/gatsby-plugin-mailchimp";
import styled from "styled-components";
import { useInput } from "react-hanger";
import Strong from "../Strong";

export const MailchimpResponse = styled(Box).attrs({ as: "span" })`
  a {
    color: ${props => (props.dark ? "#7866FF" : "#191817")};
    text-decoration: none;
    font-weight: 500;
  }
`;

const newsletterEndpoint = `https://balance.us11.list-manage.com/subscribe/post?u=a3f87e208a9f9896949b4f336&amp;id=3985713da6`;

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
      <Strong>{subscribers.toLocaleString()} people</Strong> subscribe to our
      monthly updates
    </Text>
  );
};

const SubscriptionForm = () => {
  const email = useInput("");
  const [result, setResult] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await addToMailchimp(
      email.value,
      null,
      newsletterEndpoint
    );

    await setResult(response);

    await setSubmitted(true);
  };

  if (submitted)
    return (
      <Text
        textAlign="center"
        color="textLight"
        css={{ maxWidth: 480 }}
        mx="auto"
        lineHeight={1.5}
      >
        <MailchimpResponse dangerouslySetInnerHTML={{ __html: result.msg }} />
      </Text>
    );

  return (
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
          width={240}
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
  );
};

export { Subscribers, SubscriptionForm };
