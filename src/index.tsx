import React from 'react';
import ReactDOM from 'react-dom';

import { StateProvider } from './Store/Store';
import { mainReducers } from './reducers/mainReducers';
import App from './sharedComponents/App/App';

import './assets/styles/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={mainReducers}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
