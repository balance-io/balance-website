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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />

          {headComponents}

          <script type="text/javascript" src="/unregisterServiceWorker.js" />
          <script type="text/javascript" src="/googleAnalytics.js" />
          <script type="text/javascript" src="/intercom.js" />
          <script type="text/javascript" src="/mailchimpTracking.js" />
          <script type="text/javascript" src="/mobileHelper.js" />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
          <script type="text/javascript" src="/ViralLoops.js" />
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
