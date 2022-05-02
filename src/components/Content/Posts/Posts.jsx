import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css'

const Posts = (props) => {
  
    let postsElements = props.posts.map(d => <Post message={d.message} likes={d.likes} avatar={d.avatar} />)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({type : 'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = {type : 'UPDATE-NEW-POST-TEXT', newText : text}
        props.dispatch(action)

    }
    return (
        <div>
            <div className={styles.myPosts}>
                <div className={styles.myPost_header}>
                    <h1>My posts</h1>
                </div>
                <div className={styles.myPostsTextArea}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div className={styles.myPostsButton}>
                    <button onClick={addPost} className={styles.button}>Send</button>
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