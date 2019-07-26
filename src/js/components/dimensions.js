import React from 'react';
import SeparatedContainer from './separatedcontainer';
import DropdownMenuContainer from './dropdownmenucontainer';

class Dimensions extends React.Component {
  render() {
    return (
      <SeparatedContainer>
        <DropdownMenuContainer />
      </SeparatedContainer>
    );
  }
}

export default Dimensions;
