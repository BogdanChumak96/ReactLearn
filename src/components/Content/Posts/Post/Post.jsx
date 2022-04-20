import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div className={styles.post}>
                <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1200px-Ski_trail_rating_symbol-green_circle.svg.png" alt="" />
                <h5>{props.message}</h5>
                <img width="40px" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" alt="" />
                <span>{props.likes}</span>
            </div>
           
        </div>
    )
}

export default Post