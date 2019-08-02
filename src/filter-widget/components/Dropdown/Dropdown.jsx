import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import classNames from 'classnames';

import DropdownButton from '../DropdownButton/DropdownButton';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
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
    const { opened } = this.state;
    const { title, children, dropdownId } = this.props;

    const menuClassName = classNames({ dropdown__content: true, open: opened });

    return (
      <div className="dropdown">
        <OutsideClickHandler onOutsideClick={() => this.openCloseDropdown(false)}>
          <DropdownButton
            title={title}
            dropdownId={dropdownId}
            openClose={() => this.openCloseDropdown()}
          />
          <div className={menuClassName}>{children}</div>
        </OutsideClickHandler>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.array]).isRequired,
  dropdownId: PropTypes.string.isRequired,
  dropdownClass: PropTypes.string.isRequired,
  openClose: PropTypes.func.isRequired,
};

export default Dropdown;
