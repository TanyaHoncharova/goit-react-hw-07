import axios from 'axios';
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactSuccess,
    deleteContactRequest,
    deleteContactError,
    getContactsRequest,
    getContactsSuccess,
    getContactsError
}
    from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const getContacts = () => dispatch => {
    dispatch(getContactsRequest);

    axios.get(`/contacts`)
        .then(({ data }) => dispatch(getContactsSuccess(data)),
    )
        .cach(error => dispatch(getContactsError(error)));
};

const addContact = newContact => dispatch => {

    dispatch(addContactRequest());

    axios
        .post(`/contacts`, newContact)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)),
        )
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest);

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default {
    getContacts,
    addContact,
    deleteContact
};