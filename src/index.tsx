import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import { Hello } from "./components/hello";

ReactDOM.render(
  <AppContainer>
    <Hello compiler="webpack" framework="react" />
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/hello', () => {
    const NextApp = require('./components/hello').default;
    ReactDOM.render(
      <AppContainer>
        <Hello compiler="webpack" framework="react" />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}