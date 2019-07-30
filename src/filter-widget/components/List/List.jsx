import React from 'react';

import CheckboxText from '../CheckboxText/CheckboxText.jsx';
import './List.scss';

class List extends React.PureComponent {
  render() {
    const mas = ['abc', 'afa', 'hello', 'here'];

    const res = mas.map((item, index) => (
      <CheckboxText key={item} id={index} checked={false} text={item} check={() => {}} />
    ));

    return <div className="list">{res}</div>;
  }
}

export default List;
