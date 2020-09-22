import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');
// const setExistedContacts = createAction('contacts/setExistedContacts');

export default { addContact, deleteContact, changeFilter };

// --------- BEFORE  Redux-Toolkit -----------------
//
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// const setExistedContacts = value => ({
//   type: types.SET_EXISTED_CONTACTS,
//   payload: value,
// });
