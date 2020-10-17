import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// redux stuff
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import { reducers } from "./redux/reducers";

// pages & components
import Header from './sharedComponents/Header/Header';
import App from './sharedComponents/App/App';
import { Signup } from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import './assets/styles/custom.scss';

// store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <App/>
          </Route>
          <Route path='/signup' exact>
            <Signup/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
