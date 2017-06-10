import ReactGA from 'react-ga';
import { config } from 'config';
import { browserHistory } from 'react-router';
// this is an obvious hack, but trying to just get this done quickly
// TODO: Find a more elegant solution to send index.html to the root path
if (window && window.location.pathname === '/index.html') {
  browserHistory.push('/');
}

ReactGA.initialize(config.googleAnalyticsId);

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
