import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'
import Repo from './components/repo'
import NavBar from './components/nav'
import './index.css'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/repo-view" component={Repo} />
          </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );