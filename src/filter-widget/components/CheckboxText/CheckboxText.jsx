import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxText.scss';

class CheckboxText extends React.PureComponent {
  onChange = e => {
    const { onCheck, onUncheck, id } = this.props;

    if (e.target.checked) {
      onCheck(id);
    } else {
      onUncheck(id);
    }
  };

  render() {
    const { text, checked } = this.props;

    return (
      <label className="checkbox-text">
        <input
          checked={checked}
          type="checkbox"
          onChange={this.onChange}
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
  onCheck: PropTypes.func.isRequired,
  onUncheck: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CheckboxText;
