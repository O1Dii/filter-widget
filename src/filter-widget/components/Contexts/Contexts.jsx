import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class Contexts extends React.PureComponent {
  render() {
    const {
      title, onChecked, data, selectedData, dropdownClass,
    } = this.props;

    const subtitle = selectedData
      .map(item => data.filter(([index, { id }]) => id === item).get(0)[1].name)
      .join(', ');

    return (
      <SeparatedContainer>
        <DropdownMenu title={title} subtitle={subtitle} dropdownClass={dropdownClass}>
          {data.map(([index, { id, name }]) => {
            const val = selectedData.includes(id);
            return <CheckboxText key={id} text={name} id={id} checked={val} check={onChecked} />;
          })}
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
