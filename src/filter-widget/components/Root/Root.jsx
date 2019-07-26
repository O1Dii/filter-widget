import React from 'react';
import ReactDOM from 'react-dom';
import Filters from '../Filters/Filters.jsx';

class Root extends React.Component {
  render() {
    return <Filters />;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;
