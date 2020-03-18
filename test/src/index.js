import React from 'react';
import ReactDOM from 'react-dom';
import App from './route';
import './index.css';
import { Provider } from 'react-redux'
import store from './reducer'

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root')
);
