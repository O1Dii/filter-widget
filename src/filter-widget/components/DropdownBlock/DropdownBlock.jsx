import React from 'react';
import PropTypes from 'prop-types';

import Immutable from 'immutable';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import Dropdown from '../Dropdown/Dropdown';
import CheckboxText from '../CheckboxText/CheckboxText';

class DropdownBlock extends React.PureComponent {
  render() {
    const {
      title, onCheck, onUncheck, items, selectedItems, isDisabled,
    } = this.props;

    const subtitle = items
      .filter(item => selectedItems.includes(item.get('id')))
      .map(item => item.get('name'))
      .join(', ');

    return (
      <SeparatedContainer isDisabled={isDisabled}>
        <Dropdown title={title} subtitle={subtitle}>
          {items
            .map((item) => {
              const checked = selectedItems.includes(item.get('id'));
              return (
                <CheckboxText
                  key={item.get('id')}
                  text={item.get('name')}
                  id={item.get('id')}
                  checked={checked}
                  onCheck={onCheck}
                  onUncheck={onUncheck}
                />
              );
            })
            .toList()}
        </Dropdown>
      </SeparatedContainer>
    );
  }
}

DropdownBlock.propTypes = {
  onCheck: PropTypes.func.isRequired,
  onUncheck: PropTypes.func.isRequired,
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
