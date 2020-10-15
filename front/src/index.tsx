import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Provider } from "react-redux";

// store
import store from "./redux/store";

// pages & components
import Header from './sharedComponents/Header/Header';
import App from './sharedComponents/App/App';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import './assets/styles/custom.scss';

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
