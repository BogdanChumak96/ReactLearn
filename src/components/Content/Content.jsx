import React from 'react';
import styles from './Content.module.css'
import Posts from './Posts/Posts';

const Content = (props) => {
    return (
        <div>
            <div className={styles.content_wrapper}>
                <div className={styles.content_logo}>
                    <img src="https://www.silverleaf-landscaping.co.uk/wp-content/uploads/2018/02/soft-landscaping-header.jpg" alt="" />
                </div>
                <div className={styles.content_card}>
                    <div className={styles.card_pic}>
                        <img width="130px" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
                    </div>
                    <div className={styles.card_desc}>
                        <h2>Bohdan C.</h2>
                        <h3>Date of Birth: 22 may</h3>
                        <h3>City: Kyiv</h3>
                        <h3>Education: KNUTD</h3>
                        <h3>Web-site: this</h3>
                    </div>
                </div>
                <Posts posts = {props.posts} />
            </div>

        </div>
    )
}

export default Content