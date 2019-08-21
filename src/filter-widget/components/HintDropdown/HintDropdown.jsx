import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './HintDropdown.scss';

class Hint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  getButtons() {
    const { isOpen } = this.state;
    const { values, chosenMatch, click } = this.props;

    if (isOpen) {
      return values.map(value => (
        <button type="button" key={value} onClick={() => click(value)} className="hint__text">
          {value}
        </button>
      ));
    }
    return (
      <button type="button" className="hint__text">
        {chosenMatch}
      </button>
    );
  }

  openDropdown() {
    this.setState({ isOpen: true });
  }

  closeDropdown() {
    this.setState({ isOpen: false });
  }

  render() {
    const { className } = this.props;

    const button = this.getButtons();

    return (
      <div
        className={classNames('hint', className)}
        onMouseEnter={this.openDropdown}
        onMouseLeave={this.closeDropdown}
      >
        {button}
      </div>
    );
  }
}

Hint.propTypes = {
  chosenMatch: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
