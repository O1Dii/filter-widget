import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

import DropdownButton from '../DropdownButton/DropdownButton';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.openCloseDropdown = this.openCloseDropdown.bind(this);
  }

  openCloseDropdown(prop) {
    const { dropdownId, openClose } = this.props;
    openClose(dropdownId, prop);
  }

  render() {
    const {
      dropdownClass, title, children, dropdownId,
    } = this.props;

    return (
      <div className="dropdown">
        <OutsideClickHandler onOutsideClick={() => this.openCloseDropdown(false)}>
          <DropdownButton
            title={title}
            dropdownId={dropdownId}
            openClose={() => this.openCloseDropdown()}
          />
          <div className={`dropdown__content ${dropdownClass}`}>{children}</div>
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
