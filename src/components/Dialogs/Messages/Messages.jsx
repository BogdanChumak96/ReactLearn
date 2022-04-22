import React from 'react'
import styles from './Messages.module.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

const Message = (props) => {
    if(props.author == 'Me') {
    return (
        <>
            <div className={`${styles.message__item} ${styles.message__your}`}>
                <div className={`${styles.message__ava}`}>
                    
                    <img width="60px" src={props.avatar} alt="" />
                    <h4>{props.author}</h4>
                </div>
                <div className={styles.message__text}>

                    <img className={`${styles.message__bubble} ${styles.rotated}`} width="250px" src="https://pngimage.net/wp-content/uploads/2018/06/sms-bubble-png-.png" alt="" />
                    <p className={styles.some__text}>{props.message}</p>
                </div>
            </div>
        </>
    )} else {
        return (
            <>
                <div className={styles.message__item}>
                    <div className={styles.message__ava}>
                        
                        <img width="60px" src={props.avatar} alt="" />
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
}

const Messages = (props) => {
    return (
       <>
        <Message message={props.message} author={props.author} avatar={props.avatar} />
       </>

    )
}

export default Messages