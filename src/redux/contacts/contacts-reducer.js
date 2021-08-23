import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
    getContactsRequest,
    getContactsSuccess,
    getContactsError

} from './contacts-actions';




const itemsReducer = createReducer([], {
    [getContactsSuccess]: (state, { payload }) => [...state, payload],
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [getContactsRequest]: () => true,
    [getContactsSuccess]: () => false,
    [getContactsError]: () => false,
});


const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading,
});