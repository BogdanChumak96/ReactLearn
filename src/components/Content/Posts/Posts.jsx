import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css'

const Posts = (props) => {
    console.log(typeof(props.updateNewPostText))
    let postsElements = props.posts.map(d => <Post message={d.message} likes={d.likes} avatar={d.avatar} />)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

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