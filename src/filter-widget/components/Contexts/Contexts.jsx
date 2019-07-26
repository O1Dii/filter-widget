import React from 'react';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Contexts extends React.PureComponent {
  render() {
    return (
      <SeparatedContainer>
        <DropdownMenu title="CONTEXTS" subtitle="Test Story">
          <CheckboxText text="Editor" />
          <CheckboxText text="Innovid_Test" />
          <CheckboxText text="TestStory" />
          <CheckboxText text="Cross" />
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

export default Contexts;
