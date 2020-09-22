import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

// const reducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(reducer, composeWithDevTools());

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
