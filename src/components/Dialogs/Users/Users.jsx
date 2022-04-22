import React from 'react'
import styles from './Users.module.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

const DialogItem = (props) => {
    // console.log(props)
    return (
        <li className={styles.users__dialog__item}>
            <img className={styles.users__dialog__ava} width="20px" src={props.avatar} alt="" />
            <NavLink to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </li>
    )
}


const Users = (props) => {
    let dialogsElement = props.users.map(d => <DialogItem name={d.name} id={d.id} avatar = {d.avatar} />)
    return (
            <div className={styles.users__dialog}>
                <div className={styles.dialogs__header}>
                    <h1>Dialogs</h1>
                </div>
                <ul className={styles.users__dialog__list}>
                   {
                      dialogsElement 
                   }
                </ul>
            </div>
    )
}

export default Users