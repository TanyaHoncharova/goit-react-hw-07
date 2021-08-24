import React from 'react';
import style from './ContactList.module.css';
import Loader from '../Loader';



const Contact = ({ id, name, number, onDeleteContact, isLoading }) => {
    return (
        <>

            <span>{name}</span>
            <span>{number}</span>
            <button
                className={style.btn}
                type="button"
                id={id}
                onClick={() => onDeleteContact(id)}
            > {isLoading && <Loader />}
                Delete</button>
        </>
    )

};

export default Contact;