import React from 'react';

import Filters from '../Filters/Filters.jsx';
import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Filters className="app__filters" />
      </div>
    );
  }
}

export default App;
