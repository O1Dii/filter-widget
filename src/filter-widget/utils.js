import {
  FULL_MATCH, PARTIAL_MATCH, STARTS_WITH, SORTING_ASC,
} from './constants';

export const filters = {
  [PARTIAL_MATCH]: (data, searchText) => data.toLowerCase().includes(searchText.toLowerCase()),
  [STARTS_WITH]: (data, searchText) => data.startsWith(searchText),
  [FULL_MATCH]: (data, searchText) => data === searchText,
};

export function reverseSort(a, b) {
  if (a.get('name') > b.get('name')) {
    return -1;
  }

  if (a.get('name') < b.get('name')) {
    return 1;
  }

  return 0;
}

export function sort(items, sortType) {
  if (sortType === SORTING_ASC) {
    return items.sort();
  }

  return items.sort(reverseSort);
}
