import * as I from 'immutable';

export default function reducer(store = I.Map(), action) {
  console.log('Reducer', action);
  switch (action.type) {
    case 'SET_NAME':
      return store.set('name', action.payload);

    default:
      return store;
  }
}
