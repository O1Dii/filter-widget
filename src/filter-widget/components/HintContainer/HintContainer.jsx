import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Hint from '../Hint/Hint';
import HintDropdown from '../HintDropdown/HintDropdown';

import './HintContainer.scss';

class HintContainer extends React.PureComponent {
  render() {
    const {
      className, chosenMatch, sortType, onMatchChange, onSortingChange,
    } = this.props;
    const firstHintValues = ['**', '*_', '""'];

    return (
      <div className={classNames('hint-container', className)}>
        <HintDropdown
          chosenMatch={chosenMatch}
          values={firstHintValues}
          onClick={onMatchChange}
          className="hint-container__hint-dropdown"
        />
        <Hint sortType={sortType} onClick={onSortingChange} className="hint-container__hint" />
      </div>
    );
  }
}

HintContainer.propTypes = {
  className: PropTypes.string,
  onMatchChange: PropTypes.func.isRequired,
  chosenMatch: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

HintContainer.defaultProps = {
  className: '',
};

export default HintContainer;
