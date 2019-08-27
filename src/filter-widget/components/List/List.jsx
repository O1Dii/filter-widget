import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Immutable from 'immutable';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  getFilters = filters => {
    const { selectedFilters, onCheck, onUncheck } = this.props;

    return filters
      .map(filter => {
        const checked = selectedFilters.includes(filter.get('id'));

        return (
          <CheckboxText
            key={filter.get('id')}
            id={filter.get('id')}
            checked={checked}
            text={filter.get('name')}
            onCheck={onCheck}
            onUncheck={onUncheck}
          />
        );
      })
      .toList();
  };

  render() {
    const { visibleFilters, allChecked, onAllCheck, onAllUncheck } = this.props;

    const filters = this.getFilters(visibleFilters);

    return (
      <div className="list">
        <Scrollbars autoHeight autoHeightMax={100} className="list__scrollbar">
          {!filters.isEmpty() && (
            <CheckboxText
              id={0}
              checked={allChecked}
              text="(All)"
              onCheck={onAllCheck}
              onUncheck={onAllUncheck}
            />
          )}
          {filters}
        </Scrollbars>
      </div>
    );
  }
}

List.propTypes = {
  visibleFilters: PropTypes.instanceOf(Immutable.Map),
  selectedFilters: PropTypes.instanceOf(Immutable.List),
  filteredFilters: PropTypes.instanceOf(Immutable.List),
  onCheck: PropTypes.func.isRequired,
};

List.defaultProps = {
  visibleFilters: Immutable.Map(),
  selectedFilters: Immutable.List(),
  filteredFilters: Immutable.List(),
};

export default List;
