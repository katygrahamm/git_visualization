import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import rootReducer from './reducers/index';
import Home from './components/home'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );