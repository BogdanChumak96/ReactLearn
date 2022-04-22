import React from 'react'
import styles from './SendMessageArea.module.css'

const SendMessageArea = () => {
    let linkText = React.createRef()
    const showMessage = ()=> {
        alert(linkText.current.value)
    }
    return (
        <div className={styles.SendMessageArea__wrapper}>
            <textarea ref={linkText} className={styles.textareaMessage} name="" >

            </textarea>
            <button  className={styles.button} onClick={ showMessage }>Send</button>
        </div>

    )
}

export default SendMessageArea