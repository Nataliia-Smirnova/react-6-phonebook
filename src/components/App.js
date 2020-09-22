import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import Contacts from './contacts/Contacts';
import Form from './form/Form';
import Filter from './filter/Filter';
import '../styles.css';

class App extends React.Component {
  state = {
    isMounted: false,
    cMounted: false,
  };

  componentDidMount() {
    if (this.props.items.length > 1) {
      this.setState({ isMounted: true });
    }

    this.setState({ cMounted: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setState({ isMounted: false, cMounted: false });
    }
  }

  render() {
    const { cMounted } = this.state;

    return (
      <div id="content">
        <CSSTransition in={true} appear={true} classNames="title" timeout={750}>
          <h1 id="title">Phonebook</h1>
        </CSSTransition>
        <Form />
        <h2 id="text">Contacts</h2>
        <CSSTransition
          in={this.props.items.length > 1}
          classNames={this.state.isMounted ? 'filter-appear' : 'filter'}
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <Contacts mounted={cMounted} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setExistedContacts: contacts =>
//       dispatch(actions.setExistedContacts(contacts)),
//   };
// };
export default connect(mapStateToProps)(App);
