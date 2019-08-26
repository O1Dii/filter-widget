import React from 'react';
import PropTypes from 'prop-types';

import ActiveSearchFilters from '../../containers/ActiveSearchFilters';
import './SearchInput.scss';

class SearchInput extends React.PureComponent {
  onChange = e => {
    const { onSearchTextChange } = this.props;
    onSearchTextChange(e.target.value);
  };

  render() {
    const { searchText } = this.props;

    return (
      <div className="search-input">
        <label>
          <i className="search-input__icon fas fa-search" />

          <input value={searchText} className="search-input__input" onChange={this.onChange} />
        </label>

        <ActiveSearchFilters className="search-input__hint-container" />
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchInput;
