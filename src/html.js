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
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          {headComponents}

          <script type="text/javascript" src="/googleAnalytics.js" />
          <script type="text/javascript" src="/intercom.js" />
          <script type="text/javascript" src="/mailchimpTracking.js" />
          <script type="text/javascript" src="/mobileHelper.js" />
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
