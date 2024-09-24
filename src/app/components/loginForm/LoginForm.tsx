import React from 'react'
import styles from './styles.module.scss'

export default function LoginForm() {
  return (
    <div className={styles["login-container"]}>
        <div className={styles["loign-inner"]}>
            <h1>Log In</h1>
            <input className={styles['login-input-form']} placeholder='enter your login' type="text"/>
            <input className={styles['login-input-form']} placeholder='enter your password' type="text"/>
        </div>
    </div>
  )
}
