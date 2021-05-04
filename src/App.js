import React, { Component } from 'react';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import s from './index.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Form />
        <Filter />
        <ContactList />
      </div>
    );
  }
}