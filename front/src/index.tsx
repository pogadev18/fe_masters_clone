import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { StateProvider } from './Store/Store';
import { mainReducers } from './reducers/mainReducers';
import App from './sharedComponents/App/App';

import './assets/styles/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={mainReducers}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <App />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
