import React from 'react';

import ActiveButtonWidget from '../../containers/ActiveButtonWidget';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <ActiveButtonWidget />
      </div>
    );
  }
}

export default App;
