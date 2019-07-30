import contexts from './contexts';
import dimensions from './dimensions';
import filters from './filters';

export function getContexts() {
  console.log('contexts');
  return contexts;
}

export function getDimensions() {
  console.log('dimensions');
  return dimensions;
}

export function getFilters() {
  console.log('filters');
  return filters;
}
