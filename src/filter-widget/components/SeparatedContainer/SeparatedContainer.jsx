import React from 'react';
import PropTypes from 'prop-types';

import './SeparatedContainer.scss';

class SeparatedContainer extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="separated-container">
        <div className="separated-container__empty" />
        <div className="separated-container__content">{children}</div>
      </div>
    );
  }
}

SeparatedContainer.propTypes = {
  children: PropTypes.node,
};

SeparatedContainer.defaultProps = {
  children: '',
};

export default SeparatedContainer;
