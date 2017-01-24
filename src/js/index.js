import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const rootElement = document.getElementById('root');

ReactDOM.render((
  <AppContainer>
    <App />
  </AppContainer>
), rootElement);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render((
      <AppContainer>
         <NextApp />
      </AppContainer>
    ), rootElement);
  });
}
