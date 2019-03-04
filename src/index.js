import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import logger from "redux-logger";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "./index.css";

//Reducers import
import reducers from "./shared/reducers";

// Add Middlewares
// const thunkMW = applyMiddleware(thunk);
const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(logger);
// }

// store enhancers
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancers = compose(
  applyMiddleware(...middleware),
  ...devTools
);

export const store = createStore(reducers, enhancers);

document.addEventListener("DOMContentLoaded", () => {
  const rootComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const targetNode = document.getElementById("root");
  render(rootComponent, targetNode);
});

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
