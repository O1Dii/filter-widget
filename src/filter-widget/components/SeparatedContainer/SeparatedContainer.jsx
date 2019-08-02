import React from 'react';
import PropTypes from 'prop-types';

import './SeparatedContainer.scss';

class SeparatedContainer extends React.PureComponent {
  render() {
    const { children } = this.props;
    // const className = disabled ? 'disabled' : '';

    return (
      <div className="separated-container">
        <div className="separated-container__empty" />
        <div className="separated-container__content">{children}</div>
      </div>
    );
  }
}

SeparatedContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.array]),
  disabled: PropTypes.bool,
};

SeparatedContainer.defaultProps = {
  children: [],
  disabled: false,
};

export default SeparatedContainer;
