import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css'


const Posts = (props) => {
    
    let postsElements = props.posts.map( d => <Post message={d.message} likes={d.likes} />)
   
    return (
        <div>
            <div className={styles.myPosts}>
                <div className={styles.myPost_header}>
                    <h1>My posts</h1>
                </div>
                <div className={styles.myPostsTextArea}>
                    <textarea cols="30" rows="10"></textarea>
                </div>
                <div className={styles.myPostsButton}>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
            <div className={styles.allPosts}>
                {
                  postsElements
                }  
            </div>
        </div>
    )
}
export default Posts