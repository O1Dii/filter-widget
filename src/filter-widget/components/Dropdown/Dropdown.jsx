import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  state = {
    isOpen: false,
  };

  onOutsideClick = () => {
    this.setState({ isOpen: false });
  };

  onDropdownClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { title, subtitle, children } = this.props;

    const menuClassName = classNames('dropdown__content', { dropdown__content_open: isOpen });

    return (
      <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
        <div className="dropdown">
          <button type="button" className="dropdown__button" onClick={this.onDropdownClick}>
            <i className="dropdown__arrow fas fa-angle-down" />
            <h3 className="dropdown__title">{title}</h3>
            <p className="dropdown__subtitle">{subtitle}</p>
          </button>
          <div className={menuClassName}>{children}</div>
        </div>
      </OutsideClickHandler>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.array]).isRequired,
};

export default Dropdown;
