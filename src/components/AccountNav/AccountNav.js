import React from 'react'
import Link from 'react-router/Link'
import styles from './AccountNav.css'

const AccountNav = (props) => {
  if (props.isLoggedIn) {
    return (
      <div>
        <span className={styles.name}>Hi, {props.userName}</span>
        <a className={styles.link} onClick={props.logout}>Logout</a>
      </div>
    )
  } else {
    return (
      <div>
        <Link className={styles.name} to="/signup">Sign Up</Link>
        <Link className={props.className} to="/signin">Sign In</Link>
      </div>
    )
  }
}

export default AccountNav
