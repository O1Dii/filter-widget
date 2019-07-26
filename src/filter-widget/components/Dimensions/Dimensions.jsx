import React from 'react';
import SeparatedContainer from '../Separatedcontainer/Separatedcontainer.jsx';
import DropdownMenuContainer from '../Dropdownmenucontainer/Dropdownmenucontainer.jsx';

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
