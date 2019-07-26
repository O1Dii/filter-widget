import React from 'react';

class SeparatedContainer extends React.Component {
  render() {
    return (
      <div>
        <div />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default SeparatedContainer;
