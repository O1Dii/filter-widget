import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import ActiveSearchInput from '../../containers/ActiveSearchInput';
import ActiveList from '../../containers/ActiveList';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    const { disabled } = this.props;

    return (
      <div className="search">
        <SeparatedContainer disabled={disabled}>
          <ActiveSearchInput />
          <hr className="search__hr" />
          <ActiveList />
        </SeparatedContainer>
      </div>
    );
  }
}

Search.propTypes = {
  disabled: PropTypes.bool,
};

Search.defaultProps = {
  disabled: false,
};

export default Search;
