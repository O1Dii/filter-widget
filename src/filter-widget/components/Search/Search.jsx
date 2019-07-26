import React from 'react';
import SeparatedContainer from '../Separatedcontainer/Separatedcontainer.jsx';
import SearchInput from '../Searchinput/Searchinput.jsx';
import ElementsList from '../Elementslist/Elementslist.jsx';

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
