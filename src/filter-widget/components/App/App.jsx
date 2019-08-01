import React from 'react';
import Draggable from 'react-draggable';

import ActiveFilters from '../../containers/ActiveFilters';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Draggable handle=".header__bars">
        <div className="app">
          <ActiveFilters className="app__filters" />
        </div>
      </Draggable>
    );
  }
}

export default App;
