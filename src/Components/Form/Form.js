import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import s from './Form.module.css';
import contactsActions from '../../redux/contacts-actions';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ id: shortid.generate(), [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.labelName} htmlFor={this.nameInputId}>
          Name
          <input
          className={s.name}
            type="phone"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label className={s.labelName} htmlFor={this.phoneInputId}>
          Number
          <input
          className={s.number}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.phoneInputId}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(Form);