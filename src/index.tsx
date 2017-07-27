import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { AppContainer } from "react-hot-loader"
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer"
import reducer, { initialState } from "./reducer"
import { Provider } from "react-redux"

installExtension(REACT_DEVELOPER_TOOLS)
  .then((name) => {
    console.log(`Added extension: ${name}`)
    installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added extension: ${name}`))
    .catch((err) => console.log(`An error occurred: ${err}`))
  })
  .catch((err) => console.log(`An error occurred: ${err}`))

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

// Set the initial state to whatever we found in local storage here (or inside the render method)
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => {
  const { App } = require("./components/presenters/App");
  return ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/presenters/App', () => {
    render()
  });
}