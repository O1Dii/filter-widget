import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxText.scss';

class CheckboxText extends React.PureComponent {
  render() {
    const { text, check, id } = this.props;

    return (
      <label className="checkbox-text">
        <input
          type="checkbox"
          onChange={() => {
            check(id);
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
  check: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CheckboxText;
