import React from 'react';

class CheckboxText extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default CheckboxText;
