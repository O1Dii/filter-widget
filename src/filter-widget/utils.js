import {
  FULL_MATCH, PARTIAL_MATCH, STARTS_WITH, SORTING_ASC, SORTING_DESC,
} from './constants';

export const filters = {
  [PARTIAL_MATCH]: (data, searchText) => data.toLowerCase().includes(searchText.toLowerCase()),
  [STARTS_WITH]: (data, searchText) => data.startsWith(searchText),
  [FULL_MATCH]: (data, searchText) => data === searchText,
};

export function ascendingSort(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

export function descendingSort(a, b) {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
}

export const sort = {
  [SORTING_ASC]: ascendingSort,
  [SORTING_DESC]: descendingSort,
};
