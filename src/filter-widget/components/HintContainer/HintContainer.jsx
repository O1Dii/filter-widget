import React from 'react';
import Hint from '../Hint/Hint.jsx';
import './HintContainer.scss';

class HintContainer extends React.PureComponent {
  render() {
    return (
      <div className="hint-container">
        <Hint values={['**', '*_', '""']} />
        <Hint values={['A-Z']} />
      </div>
    );
  }
}

export default HintContainer;
