import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { dateReducers } from "./redux/actions";
import { createStore } from "redux";

import { BrowserRouter, Router } from "react-router-dom";
import Main from "./component/main";
import { createBrowserHistory } from "history";

function App() {
  const store = createStore(dateReducers);
  const history = createBrowserHistory();
  window.onhashchange = function (e: HashChangeEvent) {
    e.preventDefault();
  };
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Main />
        </BrowserRouter>
      </Router>
    </Provider>
  );
}

export default App;
