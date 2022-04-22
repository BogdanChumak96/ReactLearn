import React from 'react'
import styles from './Frienditem.module.css'

const FriendItem = (props) => {
    return (
        <div className={styles.friend}>
            <div className="friend__ava">
                <img width="30px" src={props.avatar} alt="" />
            </div>
            <div className="friend__name">
                {props.name}
            </div>
        </div>
    )
}

export default FriendItem