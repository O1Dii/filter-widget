import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class Contexts extends React.Component {
  render() {
    const { onContextChecked, subtitle, values } = this.props;

    return (
      <SeparatedContainer>
        <DropdownMenu title="Contexts" subtitle={subtitle}>
          {Object.entries(values).map(([key, val]) => (
            <CheckboxText key={key} text={key} checked={val} check={onContextChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

Contexts.propTypes = {
  onContextChecked: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.bool).isRequired,
};

Contexts.defaultProps = {
  subtitle: '',
};

export default Contexts;
