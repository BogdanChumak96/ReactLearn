import React from 'react'
import styles from './Dialogs.module.css'
import Users from './Users/Users'
import Messages from './Messages/Messages.jsx'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import SendMessageArea from './SendMessageArea/SendMessageArea.jsx'

const Dialogs = (props) => {
  // console.log(props.users)
  let allMessages = props.message.map(elem => <Messages message={elem.message} author={elem.author} avatar={elem.avatar} />)
  return ( 
    <div className={styles.Dialogs__wrapper}>
      <Users users={props.users} />
      <div className={styles.message__wrapper}>
        
        {allMessages}
        <SendMessageArea />
      </div>
      
    </div>
  )
}

export default Dialogs