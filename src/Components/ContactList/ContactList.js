import s from './ContactList.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

function ContactsRender({ contactsList, onDelete }) {
  return (
      <ul className={s.contactInfo}>
        {contactsList &&
          contactsList.map(({ id, name, number }) => (
            <li className={s.info} key={id}>
              <span className={s.contact}>
                {name} - {number}
              </span>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
  );
}

const visibleContacts = (contacts, filter) => {
return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())) 
}

const mapStateToProps = (state) => ({
  contactsList: visibleContacts(state.contacts, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsRender);
