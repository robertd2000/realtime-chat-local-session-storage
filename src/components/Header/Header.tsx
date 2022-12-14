import React, { memo } from 'react'
import styles from './Header.module.css'

const Header = ({ username }: { username: string }) => {
  return (
    <div className={styles.container}>
      <h1>{username}</h1>
    </div>
  )
}

export default memo(Header)
