export const addTodo = text => ({
  type: 'TYPE',
  id: 0,
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
