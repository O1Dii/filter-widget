import React from 'react';
import ReactDOM from 'react-dom';
import Filters from './filter-widget/components/Filters/Filters.jsx';

class App extends React.Component {
  render() {
    return <Filters />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
