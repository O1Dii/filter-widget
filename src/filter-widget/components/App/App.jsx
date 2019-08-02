import React from 'react';

import ActiveOpenButton from '../../containers/ActiveOpenButton';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <ActiveOpenButton id="1" />
      </div>
    );
  }
}

export default App;
