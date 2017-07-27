import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer, { initialState } from "./reducer"

/* tslint:disable:no-console */
installExtension(REACT_DEVELOPER_TOOLS)
  .then((reactName) => {
    console.log(`Added extension: ${reactName}`)
    installExtension(REDUX_DEVTOOLS)
    .then((reduxName) => console.log(`Added extension: ${reduxName}`))
    .catch((err) => console.log(`An error occurred: ${err}`))
  })
  .catch((err) => console.log(`An error occurred: ${err}`))
/* tslint:enable:no-console */

// tslint:disable-next-line:no-namespace
declare global {
  // tslint:disable-next-line:interface-name
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

// Set the initial state to whatever we found in local storage here (or inside the render method)
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => {
  const { App } = require("./components/presenters/App")
  return ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/presenters/App", () => {
    render()
  })
}
