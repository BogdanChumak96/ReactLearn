import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
    // console.log(props)
    return (
        <div>
            <div className={styles.post}>
                <img width="50px" src={props.avatar} alt="" />
                <h5>{props.message}</h5>
                <img width="40px" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" alt="" />
                <span>{props.likes}</span>
            </div>
           
        </div>
    )
}

export default Post