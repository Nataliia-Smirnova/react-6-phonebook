import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const setExistedContacts = value => ({
  type: types.SET_EXISTED_CONTACTS,
  payload: value,
});

export default { addContact, deleteContact, changeFilter, setExistedContacts };
