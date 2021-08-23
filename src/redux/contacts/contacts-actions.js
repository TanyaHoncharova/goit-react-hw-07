import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts / addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction('contacts / deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contact/deleteContactError');

export const getContactsRequest = createAction('contacts / getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contact/getContactsError');


export const changeFilter = createAction('contacts/changeFilter');


