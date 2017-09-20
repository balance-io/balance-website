import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="referrer" content="origin" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {headComponents}

          <title>Balance</title>
          <meta
            name="description"
            content="A subscription-based Mac app for monitoring your bank balances and card transactions."
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@balancemymoney" />
          <meta name="twitter:title" content="Balance" />
          <meta
            name="twitter:description"
            content="A subscription-based Mac app for monitoring your bank balances and card transactions."
          />
          <meta name="twitter:image:src" content="/twitter-card-800-400.png" />
          <meta property="og:title" content="Balance" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://balancemy.money/" />
          <meta property="og:image" content="/twitter-card-800-400.png" />
          <meta
            property="og:description"
            content="A subscription-based Mac app for monitoring your bank balances and card transactions."
          />
          <meta property="og:site_name" content="Balance" />
          <meta property="fb:admins" content="1748891795369317" />
          <script type="text/javascript" src="/googleAnalytics.js" />
          <script type="text/javascript" src="/intercom.js" />
          <script type="text/javascript" src="/mailchimpTracking.js" />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

export default Html;
