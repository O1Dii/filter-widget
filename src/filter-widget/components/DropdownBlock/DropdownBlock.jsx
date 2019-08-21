import React from 'react';
import PropTypes from 'prop-types';

import Immutable from 'immutable';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class DropdownBlock extends React.PureComponent {
  render() {
    const {
      title, onChecked, items, selectedItems, dropdownClass, disabled,
    } = this.props;

    const subtitle = selectedItems
      .map(item => items.filter(({ id }) => id === item).get(item).name)
      .join(', ');

    return (
      <SeparatedContainer disabled={disabled}>
        <DropdownMenu title={title} subtitle={subtitle} dropdownClass={dropdownClass}>
          {items
            .map(({ id, name }) => {
              const val = selectedItems.includes(id);
              return (
                <CheckboxText key={id} text={name} id={id} checked={val} onCheck={onChecked} />
              );
            })
            .toList()}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

DropdownBlock.propTypes = {
  onChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  dropdownClass: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

DropdownBlock.defaultProps = {
  items: Immutable.Map(),
  selectedItems: Immutable.List(),
  disabled: false,
};

export default DropdownBlock;
