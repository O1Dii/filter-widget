import React from 'react';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Dimensions extends React.PureComponent {
  render() {
    return (
      <SeparatedContainer>
        <DropdownMenu title="DIMENSIONS" subtitle="Dimension5">
          <CheckboxText text="Dimension1" />
          <CheckboxText text="Dimension2" />
          <CheckboxText text="Dimension3" />
          <CheckboxText text="Dimension4" />
          <CheckboxText text="Dimension5" />
          <CheckboxText text="Dimension6" />
          <CheckboxText text="Dimension7" />
          <CheckboxText text="Day" />
          <CheckboxText text="Week" />
          <CheckboxText text="Month" />
          <CheckboxText text="Quarter" />
          <CheckboxText text="Year" />
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

export default Dimensions;
