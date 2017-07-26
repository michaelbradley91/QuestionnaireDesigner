import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader'
import { Hello } from "./components/hello";
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import reducer, { initialState } from './reducer';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './actions'

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

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED))

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