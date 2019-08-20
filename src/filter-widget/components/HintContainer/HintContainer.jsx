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

    const mainClassName = classNames('hint-container', className);

    return (
      <div className={mainClassName}>
        <HintDropdown
          chosenMatch={chosenMatch}
          values={firstHintValues}
          click={this.onMatchChange}
          className="hint-container__first-hint"
        />
        <Hint
          sortType={sortType}
          click={this.onSortingChange}
          className="hint-container__second-hint"
        />
      </div>
    );
  }
}

HintContainer.propTypes = {
  className: PropTypes.string,
  matchChange: PropTypes.func.isRequired,
  sortingChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

HintContainer.defaultProps = {
  className: '',
};

export default HintContainer;
