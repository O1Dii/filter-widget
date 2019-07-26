import React from 'react';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class List extends React.PureComponent {
  render() {
    const mas = ['abc', 'afa', 'hello', 'here'];

    const res = mas.map(item => <CheckboxText key={item} text={item} />);

    return <div>{res}</div>;
  }
}

export default List;
