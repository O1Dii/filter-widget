import React from 'react';
import PropTypes from 'prop-types';

import Immutable from 'immutable';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import Dropdown from '../Dropdown/Dropdown';
import CheckboxText from '../CheckboxText/CheckboxText';

class DropdownBlock extends React.PureComponent {
  render() {
    const {
      title, onChecked, items, selectedItems, isDisabled,
    } = this.props;

    const subtitle = selectedItems
      .map(item => items.filter(({ id }) => id === item).get(item).name)
      .join(', ');

    return (
      <SeparatedContainer isDisabled={isDisabled}>
        <Dropdown title={title} subtitle={subtitle}>
          {items
            .map(({ id, name }) => {
              const val = selectedItems.includes(id);
              return (
                <CheckboxText key={id} text={name} id={id} checked={val} onCheck={onChecked} />
              );
            })
            .toList()}
        </Dropdown>
      </SeparatedContainer>
    );
  }
}

DropdownBlock.propTypes = {
  onChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Immutable.Map),
  selectedItems: PropTypes.instanceOf(Immutable.List),
  isDisabled: PropTypes.bool,
};

DropdownBlock.defaultProps = {
  items: Immutable.Map(),
  selectedItems: Immutable.List(),
  isDisabled: false,
};

export default DropdownBlock;
