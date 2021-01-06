import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {dateReducers} from "./redux/actions";
import {createStore} from 'redux';

import { Router } from 'react-router-dom';
import Main from "./component/main";
import { createBrowserHistory } from "history";


function App() {
  const store = createStore(dateReducers)
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
