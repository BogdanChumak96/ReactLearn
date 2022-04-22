import React from 'react'
import styles from "./Friends.module.css"
import FriendItem from './FriendItem/FriendItem'



const Friends = (props) => {
    // console.log(props.friendInfo)
    let elemFriend = props.friendInfo.map( e =>  <FriendItem id = {e.id} name = {e.nameFriend} avatar = {e.avatar}/>)
    return (
        <>
            <div className={styles.friends__header}>
                Friends
            </div>
            <div className={styles.friends__wrapper}>
               {elemFriend}
            </div>
        </>
    )
}

export default Friends