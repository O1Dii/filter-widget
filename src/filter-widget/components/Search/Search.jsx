import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import ActiveSearchInput from '../../containers/ActiveSearchInput';
import ActiveList from '../../containers/ActiveList';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    const { isDisabled } = this.props;

    return (
      <div className="search">
        <SeparatedContainer isDisabled={isDisabled}>
          <ActiveSearchInput />
          <hr className="search__hr" />
          <ActiveList />
        </SeparatedContainer>
      </div>
    );
  }
}

Search.propTypes = {
  isDisabled: PropTypes.bool,
};

Search.defaultProps = {
  isDisabled: false,
};

export default Search;
