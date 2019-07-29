import React from 'react';

import './CheckboxText.scss';

class CheckboxText extends React.PureComponent {
  render() {
    const { text } = this.props;

    return (
      <label className="checkbox-text">
        <input
          type="checkbox"
          onChange={this.props.check && this.props.check.bind(this, text)}
          className="checkbox-text__checkbox"
        />
        <p className="checkbox-text__text">{text}</p>
      </label>
    );
  }
}

export default CheckboxText;
