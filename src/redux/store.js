import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const reducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
