import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Immutable from 'immutable';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  render() {
    const { items, selectedItems, onChecked } = this.props;

    const res = items
      .map(({ id, name }) => {
        const val = selectedItems.includes(id);
        return <CheckboxText key={id} id={id} checked={val} text={name} onCheck={onChecked} />;
      })
      .toList();

    return (
      <div className="list">
        <Scrollbars autoHeight autoHeightMax={100} className="list__scrollbar">
          {res}
        </Scrollbars>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  onChecked: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: Immutable.Map(),
  selectedItems: Immutable.List(),
};

export default List;
