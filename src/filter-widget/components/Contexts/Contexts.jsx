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
  onChecked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  selectedData: PropTypes.arrayOf(PropTypes.string),
  dropdownClass: PropTypes.string.isRequired,
};

Contexts.defaultProps = {
  data: [],
  selectedData: [],
};

export default Contexts;
