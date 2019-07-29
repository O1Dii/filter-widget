import React from 'react';

import Hint from '../Hint/Hint.jsx';
import './HintContainer.scss';

class HintContainer extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={`hint-container ${className}`}>
        <Hint values={['**', '*_', '""']} className="hint-container__hint" />
        <Hint values={['A-Z']} className="hint-container__hint" />
      </div>
    );
  }
}

export default HintContainer;
