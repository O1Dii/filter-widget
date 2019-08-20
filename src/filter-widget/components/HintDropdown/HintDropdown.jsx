import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './HintDropdown.scss';

class Hint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.openCloseDropdown = this.openCloseDropdown.bind(this);
  }

  openCloseDropdown(prop) {
    const { opened } = this.state;
    this.setState({ opened: prop !== undefined ? prop : !opened });
  }

  render() {
    const {
      values, chosenMatch, className, click,
    } = this.props;

    const button = this.state.opened ? (
      values.map(value => (
        <button type="button" key={value} onClick={() => click(value)} className="hint__text">
          {value}
        </button>
      ))
    ) : (
      <button type="button" className="hint__text">
        {chosenMatch}
      </button>
    );

    return (
      <div
        className={classNames('hint', className)}
        onMouseEnter={() => this.openCloseDropdown(true)}
        onMouseLeave={() => this.openCloseDropdown(false)}
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
