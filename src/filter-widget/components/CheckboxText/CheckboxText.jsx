import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxText.scss';

class CheckboxText extends React.PureComponent {
  render() {
    const { text, checked, check } = this.props;

    return (
      <label className="checkbox-text">
        <input
          value={checked}
          type="checkbox"
          onChange={() => {
            check(text);
          }}
          className="checkbox-text__checkbox"
        />
        <p className="checkbox-text__text">{text}</p>
      </label>
    );
  }
}

CheckboxText.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  check: PropTypes.func.isRequired,
};

export default CheckboxText;
