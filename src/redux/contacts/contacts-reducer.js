import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactSuccess,
    deleteContactRequest,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    changeFilter,
} from './contacts-actions';




const itemsReducer = createReducer([], {
    [fetchContactsRequest]: (_, { payload }) => [payload],
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
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
});


const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading,
});