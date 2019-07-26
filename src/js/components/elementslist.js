import React from 'react';
import CheckboxText from './checkboxtext';

class ElementsList extends React.Component {
  render() {
    return this.props.children.map(child => {
      <CheckboxText text={chlid} />;
    });
  }
}

export default ElementsList;
