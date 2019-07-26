import React from 'react';
import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';
import ElementsList from '../List/List.jsx';

class Search extends React.Component {
  render() {
    return (
      <SeparatedContainer>
        <SearchInput />
        <hr />
        <ElementsList />
      </SeparatedContainer>
    );
  }
}

export default Search;
