import React from 'react';
import Hint from '../Hint/Hint.jsx';
import './HintContainer.scss';

class HintContainer extends React.PureComponent {
  render() {
    return (
      <div className="hint-container">
        <Hint />
        <Hint />
      </div>
    );
  }
}

export default HintContainer;
