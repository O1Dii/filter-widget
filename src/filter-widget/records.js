import { Record } from 'immutable';

export const contextRecord = Record({ id: 0, name: '' });
export const dimensionRecord = Record({ id: 0, name: '', contextId: 0 });
export const filterRecord = Record({ id: 0, name: '', dimensionId: 0 });
