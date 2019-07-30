import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './filter-widget/components/App/App.jsx';
import filterWidget from './filter-widget/reducers/index';

const arr1 = ['Editor', 'Innovid_Test', 'TestStory', 'Cross'];
const arr2 = [
  'Dimension1',
  'Dimension2',
  'Dimension3',
  'Dimension4',
  'Dimension5',
  'Dimension6',
  'Dimension7',
  'Day',
  'Week',
  'Month',
  'Quarter',
  'Year',
];
const initialState = {
  toggle: {
    context: Object.fromEntries(arr1.map(val => [val, false])),
    dimension: Object.fromEntries(arr2.map(val => [val, false])),
  },
};

const store = createStore(
  filterWidget,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
