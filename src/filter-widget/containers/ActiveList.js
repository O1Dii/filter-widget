import { connect } from 'react-redux';

import List from '../components/List/List';

const mapStateToProps = (state) => {
  const currentData = state.get('data').filters;
  const currentSelectedData = state.get('selectedData').filters || [];
  const search = state.get('search');

  if (!currentData) {
    return state;
  }

  let filteredData;

  if (search.match === '**') {
    filteredData = Object.values(currentData).filter(item => item.name.toLowerCase().includes(search.text.toLowerCase()));
  }
  if (search.match === '*_') {
    filteredData = Object.values(currentData).filter(item => item.name.startsWith(search.text));
  }
  if (search.match === '""') {
    filteredData = Object.values(currentData).filter(item => item.name === search.text);
  }

  filteredData.sort();

  if (search.sortingReverse) {
    filteredData.reverse();
  }

  const values = Object.values(filteredData).map(item => ({
    id: item.id,
    name: item.name,
    val: Object.values(currentSelectedData).includes(item.id),
  }));

  return {
    values,
  };
};

const mapDispatchToProps = () => ({});

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
