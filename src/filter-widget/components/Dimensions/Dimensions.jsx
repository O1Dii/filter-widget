import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class Dimensions extends React.PureComponent {
  render() {
    const {
      onDimensionChecked, subtitle, values, dropdownClass, disabled,
    } = this.props;

    return (
      <SeparatedContainer disabled={disabled}>
        <DropdownMenu
          title="Dimensions"
          subtitle={subtitle}
          dropdownId="2"
          dropdownClass={dropdownClass}
        >
          {values.map(({ id, name, val }) => (
            <CheckboxText key={id} text={name} id={id} checked={val} check={onDimensionChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

Dimensions.propTypes = {
  onDimensionChecked: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  dropdownClass: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Dimensions.defaultProps = {
  subtitle: '',
  disabled: false,
  values: [],
};

export default Dimensions;
