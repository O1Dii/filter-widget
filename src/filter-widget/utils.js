import { FULL_MATCH, PARTIAL_MATCH, STARTS_WITH } from './constants';

export const filters = {
  [PARTIAL_MATCH]: (data, searchText) => data.filter(([index, item]) => item.name.toLowerCase().includes(searchText.toLowerCase())),
  [STARTS_WITH]: (data, searchText) => data.filter(([index, item]) => item.name.startsWith(searchText)),
  [FULL_MATCH]: (data, searchText) => data.filter(([index, item]) => item.name === searchText),
};

export function reverseSort(a, b) {
  if (a[1].name > b[1].name) {
    return -1;
  }

  if (a[1].name < b[1].name) {
    return 1;
  }

  return 0;
}
