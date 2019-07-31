import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import SearchInput from '../SearchInput/SearchInput';
import List from '../List/List';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="search">
        <SeparatedContainer>
          <SearchInput />
          <hr className="search__hr" />
          <List />
        </SeparatedContainer>
      </div>
    );
  }
}

export default Search;
