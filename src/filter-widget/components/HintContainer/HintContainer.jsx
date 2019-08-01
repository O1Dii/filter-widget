import React from 'react';
import PropTypes from 'prop-types';

import Hint from '../Hint/Hint';

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
    const { className, reverse, chosenMatch } = this.props;
    const firstHintValues = ['**', '*_', '""'];

    return (
      <div className={`hint-container ${className}`}>
        <Hint
          values={firstHintValues}
          click={this.onMatchChange}
          className="hint-container__first-hint"
        />
        <Hint
          values={reverse ? ['Z-A'] : ['A-Z']}
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
};

HintContainer.defaultProps = {
  className: '',
};

export default HintContainer;
