import React from 'react'
import styles from './Messages.module.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

const Message = (props) => {
    return (
        <>
            <div className={styles.message__item}>
                <div className={styles.message__ava}>
                    <img width="60px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/240px-Avatar_icon_green.svg.png" alt="" />
                    <h4>{props.author}</h4>
                </div>
                <div className={styles.message__text}>

                    <img className={styles.message__bubble} width="250px" src="https://pngimage.net/wp-content/uploads/2018/06/sms-bubble-png-.png" alt="" />
                    <p className={styles.some__text}>{props.message}</p>
                </div>
            </div>
        </>
    )
}

const Messages = (props) => {
    return (
        // "ggggg"
            // <Routes>
                 /* <Route exact path='dialogs/1' element={<Message message={props.message} author={props.author} />} />   */
                 <Message message={props.message} author={props.author} /> 
            /* </Routes> */
        
    )
}

export default Messages