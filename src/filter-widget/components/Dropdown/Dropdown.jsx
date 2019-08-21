import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.closeDropdown = this.closeDropdown.bind(this);
    this.openCloseDropdown = this.openCloseDropdown.bind(this);
  }

  closeDropdown() {
    this.setState({ opened: false });
  }

  openCloseDropdown() {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  render() {
    const { opened } = this.state;
    const { title, subtitle, children } = this.props;

    const menuClassName = classNames('dropdown__content', { dropdown__content_open: opened });

    return (
      <OutsideClickHandler onOutsideClick={this.closeDropdown}>
        <div className="dropdown">
          <button type="button" className="dropdown__button" onClick={this.openCloseDropdown}>
            <i className="dropdown__arrow fas fa-angle-down" />
            {title}
          </button>
          <div className={menuClassName}>{children}</div>
          <p className="dropdown__subtitle">{subtitle}</p>
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
