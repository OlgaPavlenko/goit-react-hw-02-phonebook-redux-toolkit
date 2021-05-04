import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts-reducer';

const store = configureStore({
    reducer: contactsReducer,
    middleware: getDefaultMiddleware(),
});

export default store;