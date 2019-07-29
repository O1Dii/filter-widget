import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Filters from './filter-widget/components/Filters/Filters.jsx';
import red from './filter-widget/reducers/index';

const store = createStore(
  red,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Filters />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
