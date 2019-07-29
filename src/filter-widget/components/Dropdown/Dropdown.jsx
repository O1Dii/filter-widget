import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <div className="dropdown">
        <i className="dropdown__arrow fas fa-angle-down" />
        <button type="button" className="dropdown__button">
          {title}
        </button>
        <div className="dropdown__content">{children}</div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
