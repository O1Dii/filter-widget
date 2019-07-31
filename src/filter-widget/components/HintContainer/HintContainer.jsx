import React from 'react';
import PropTypes from 'prop-types';

import Hint from '../Hint/Hint';

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

HintContainer.propTypes = {
  className: PropTypes.string,
};

HintContainer.defaultProps = {
  className: '',
};

export default HintContainer;
