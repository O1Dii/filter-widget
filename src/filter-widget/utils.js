export const filters = {
  '**': (data, searchText) => data.filter(([index, item]) => item.name.toLowerCase().includes(searchText.toLowerCase())),
  '*_': (data, searchText) => data.filter(([index, item]) => item.name.startsWith(searchText)),
  '""': (data, searchText) => data.filter(([index, item]) => item.name === searchText),
};
