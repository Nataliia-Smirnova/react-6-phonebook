import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.phonebook__label}>
      Find contacts by name:
      <input
        className={styles.phonebook__input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = state => ({ value: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
