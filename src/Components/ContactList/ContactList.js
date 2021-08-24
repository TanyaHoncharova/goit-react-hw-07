import React from 'react';
import propTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import deleteContact from '../../redux/contacts/contacts-operations';
import operations from '../../redux/contacts/contacts-operations';

import style from './ContactList.module.css';
import { useEffect } from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operations.fetchContacts())
    }, [dispatch]);



    return (
        <ul className={style.list}>
            {contacts && contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className={style.item}>
                        <span>{name}</span><span>{number}</span>
                        <button
                            className={style.btn}
                            type="button"
                            id={id}
                            onClick={() => onDeleteContact(id)}
                        >
                            Delete</button>
                    </li>
                );
            })}
        </ul>

    );
};


ContactList.defaultProps = {
    contacts: []
};

ContactList.propTypes = {
    contacts: propTypes.array,
    onDeleteContact: propTypes.func.isRequired
};

const getVisibleContacts = (allContats, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContats.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContacts(items, filter),
// });
const mapStateToProps = (state) => ({
    contacts: state.contacts.item,
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(operations.fetchContacts()),
    onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);