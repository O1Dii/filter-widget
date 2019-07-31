import React from 'react';

import ActiveFilters from '../../containers/ActiveFilters';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <ActiveFilters className="app__filters" />
      </div>
    );
  }
}

export default App;
