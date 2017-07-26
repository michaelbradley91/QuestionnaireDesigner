import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import { Hello } from "./components/hello";

/*
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

import { Hello } from './components/Hello'
*/
/*
const render: (component: any) => any = Hello => {
  ReactDOM.render(
    <AppContainer>
      <Hello />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Hello)

if (module.hot) {
  module.hot.accept(['./components/hello'], () => {
    console.log("Hot reloading")
    render(Hello)
  })
}
*/
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