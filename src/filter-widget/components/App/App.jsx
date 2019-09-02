import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ActiveButtonWidget from '../../containers/ActiveButtonWidget';

import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="app">
          <ActiveButtonWidget />
        </div>
      </DndProvider>
    );
  }
}

export default App;
