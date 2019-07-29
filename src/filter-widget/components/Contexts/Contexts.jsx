import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Contexts extends React.PureComponent {
  render() {
    const { onContextChecked } = this.props;
    const arr = ['Editor', 'Innovid_Test', 'TestStory', 'Cross'];

    return (
      <SeparatedContainer>
        <DropdownMenu title="Contexts" subtitle="Test Story">
          {arr.map((val, index) => (
            <CheckboxText key={index} id={index} text={val} check={onContextChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

Contexts.propTypes = {
  onContextChecked: PropTypes.func.isRequired,
};

export default Contexts;
