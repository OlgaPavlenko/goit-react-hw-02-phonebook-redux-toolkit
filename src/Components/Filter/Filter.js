import s from './Filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

const Filter = ({ onFilterChanged }) => {
  const handleFilterChanged = e => {
    const value = e.currentTarget.value;
    onFilterChanged(value);
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.text} type="text" onChange={handleFilterChanged}></input>
    </label>
  );
};

const mapDispatchToProps = dispatch => ({
  onFilterChanged: text => dispatch(contactsActions.changeFilter(text)),
});

export default connect(null, mapDispatchToProps)(Filter);;
