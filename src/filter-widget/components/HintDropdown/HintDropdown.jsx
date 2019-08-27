import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './HintDropdown.scss';

class Hint extends React.PureComponent {
  state = {
    isOpen: false,
  };

  onMouseEnter = () => {
    this.setState({ isOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ isOpen: false });
  };

  getButtons = () => {
    const { isOpen } = this.state;
    const { values, chosenMatch, onClick } = this.props;

    if (isOpen) {
      return values.map(value => (
        <button type="button" key={value} onClick={() => onClick(value)} className="hint__text">
          {value}
        </button>
      ));
    }

    return (
      <button type="button" className="hint__text">
        {chosenMatch}
      </button>
    );
  };

  render() {
    const { className } = this.props;

    return (
      <div
        className={classNames('hint', className)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.getButtons()}
      </div>
    );
  }
}

Hint.propTypes = {
  chosenMatch: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
