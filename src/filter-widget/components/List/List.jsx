import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  render() {
    const { data, selectedData, onChecked } = this.props;

    const res = data.map(([index, { id, name }]) => {
      const val = selectedData.includes(id);
      return <CheckboxText key={id} id={id} checked={val} text={name} check={onChecked} />;
    });

    return (
      <div className="list">
        <Scrollbars className="list__scrollbar">{res}</Scrollbars>
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  selectedData: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  data: [],
  selectedData: [],
};

export default List;
