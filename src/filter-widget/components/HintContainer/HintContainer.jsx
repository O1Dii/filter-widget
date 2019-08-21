import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Hint from '../Hint/Hint';
import HintDropdown from '../HintDropdown/HintDropdown';

import './HintContainer.scss';

class HintContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMatchChange = this.onMatchChange.bind(this);
    this.onSortingChange = this.onSortingChange.bind(this);
  }

  onMatchChange(data) {
    const { matchChange } = this.props;
    matchChange(data);
  }

  onSortingChange(data) {
    const { sortingChange } = this.props;
    sortingChange(data);
  }

  render() {
    const { className, chosenMatch, sortType } = this.props;
    const firstHintValues = ['**', '*_', '""'];

    return (
      <div className={classNames('hint-container', className)}>
        <HintDropdown
          chosenMatch={chosenMatch}
          values={firstHintValues}
          click={this.onMatchChange}
          className="hint-container__hint-dropdown"
        />
        <Hint sortType={sortType} click={this.onSortingChange} className="hint-container__hint" />
      </div>
    );
  }
}

HintContainer.propTypes = {
  className: PropTypes.string,
  matchChange: PropTypes.func.isRequired,
  chosenMatch: PropTypes.string.isRequired,
  sortingChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

HintContainer.defaultProps = {
  className: '',
};

export default HintContainer;
