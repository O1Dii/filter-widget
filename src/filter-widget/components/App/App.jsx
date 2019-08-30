import React from 'react';

import ButtonWidget from '../ButtonWidget/ButtonWidget';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <ButtonWidget id="0" />
        <ButtonWidget id="1" />
        <ButtonWidget id="2" />
      </div>
    );
  }
}

export default App;
