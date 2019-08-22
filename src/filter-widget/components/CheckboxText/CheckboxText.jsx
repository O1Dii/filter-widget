import React from 'react';
import PropTypes from 'prop-types';

import './CheckboxText.scss';

class CheckboxText extends React.PureComponent {
  onChange = () => {
    const { onCheck, id } = this.props;
    onCheck(id);
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
  id: PropTypes.number.isRequired,
};

export default CheckboxText;
