import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import App from './filter-widget/components/App/App';
import filterWidget from './filter-widget/reducers';

const initialState = Immutable.Map();

const store = createStore(filterWidget, initialState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
