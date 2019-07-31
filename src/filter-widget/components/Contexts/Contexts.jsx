import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class Contexts extends React.PureComponent {
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
  values: PropTypes.objectOf(PropTypes.bool),
};

Contexts.defaultProps = {
  subtitle: '',
  values: {},
};

export default Contexts;
