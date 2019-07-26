import React from 'react';
import SeparatedContainer from './separatedcontainer';

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
