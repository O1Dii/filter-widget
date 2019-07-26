import React from 'react';
import Hint from './hint';

class HintContainer extends React.Component {
  render() {
    return (
      <div>
        <Hint />
        <Hint />
      </div>
    );
  }
}

export default HintContainer;
