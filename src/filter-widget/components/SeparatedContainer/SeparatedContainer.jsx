import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SeparatedContainer.scss';

class SeparatedContainer extends React.PureComponent {
  render() {
    const { children, isDisabled } = this.props;

    const className = classNames('separated-container', {
      'separated-container_disabled': isDisabled,
    });

    return (
      <div className={className}>
        <div className="separated-container__empty" />
        <div className="separated-container__content">{children}</div>
      </div>
    );
  }
}

SeparatedContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.array]),
  isDisabled: PropTypes.bool,
};

SeparatedContainer.defaultProps = {
  children: '',
  isDisabled: false,
};

export default SeparatedContainer;
