import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import CheckboxText from '../CheckboxText/CheckboxText';

class Dimensions extends React.PureComponent {
  render() {
    const { onDimensionChecked, subtitle, values } = this.props;

    return (
      <SeparatedContainer>
        <DropdownMenu title="Dimensions" subtitle={subtitle}>
          {Object.entries(values).map(([key, val]) => (
            <CheckboxText key={key} text={key} checked={val} check={onDimensionChecked} />
          ))}
        </DropdownMenu>
      </SeparatedContainer>
    );
  }
}

Dimensions.propTypes = {
  onDimensionChecked: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.bool),
};

Dimensions.defaultProps = {
  subtitle: '',
  values: {},
};

export default Dimensions;
