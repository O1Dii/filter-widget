import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Dimensions extends React.PureComponent {
  render() {
    const { onDimensionChecked } = this.props;
    const arr = [
      'Dimension1',
      'Dimension2',
      'Dimension3',
      'Dimension4',
      'Dimension5',
      'Dimension6',
      'Dimension7',
      'Day',
      'Week',
      'Month',
      'Quarter',
      'Year',
    ];
    return (
      <SeparatedContainer>
        <DropdownMenu title="Dimensions" subtitle="Dimension5">
          {arr.map((val, index) => (
            <CheckboxText key={index} id={index} text={val} check={onDimensionChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

export default Dimensions;
