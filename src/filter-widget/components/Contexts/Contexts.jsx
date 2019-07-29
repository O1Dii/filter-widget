import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Contexts extends React.PureComponent {
  render() {
    return (
      <SeparatedContainer>
        <DropdownMenu title="Contexts" subtitle="Test Story">
          <CheckboxText text="Editor" check={this.check} />
          <CheckboxText text="Innovid_Test" check={this.check} />
          <CheckboxText text="TestStory" check={this.check} />
          <CheckboxText text="Cross" check={this.check} />
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

export default Contexts;
