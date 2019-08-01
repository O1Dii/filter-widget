import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class Contexts extends React.PureComponent {
  render() {
    const {
      onContextChecked, subtitle, values, dropdownClass,
    } = this.props;

    return (
      <SeparatedContainer>
        <DropdownMenu
          title="Contexts"
          subtitle={subtitle}
          dropdownId="1"
          dropdownClass={dropdownClass}
        >
          {values.map(({ id, name, val }) => (
            <CheckboxText key={id} text={name} id={id} checked={val} check={onContextChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

Contexts.propTypes = {
  onContextChecked: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  dropdownClass: PropTypes.string.isRequired,
};

Contexts.defaultProps = {
  subtitle: '',
  values: [],
};

export default Contexts;
