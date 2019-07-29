import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import List from '../List/List.jsx';
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
