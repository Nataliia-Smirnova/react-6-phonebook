import { combineReducers } from 'redux';
import types from './contacts-types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.setExistedContacts]: (state, action) => [
    ...state,
    ...action.payload,
  ],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

//  -----------  ДО redux-toolkit ----------------
//
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     case types.SET_EXISTED_CONTACTS:
//       return [...state, ...payload];

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
