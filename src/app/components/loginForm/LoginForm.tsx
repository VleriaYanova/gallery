import React from 'react'
import styles from './styles.module.scss'

export default function LoginForm() {
    return (
        <div className={styles["login-container"]}>
            <div className={styles["loign-inner"]}>
                <h1>Log In</h1>
                <div className={styles['login-input']}>
                    <input className={styles['login-input-form']} placeholder='enter your login' type="text" />
                </div>
                <div className={styles['password-input']}>
                    <input className={styles['login-input-form']} placeholder='enter your password' type="text" />
                </div>
                <button className={styles['login-btn']}>ENTER</button>
            </div>
        </div>
    )
}
