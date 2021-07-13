import React from 'react'
import * as styles from '../styles/Ocean.module.scss'

const Ocean: React.FC = () => {
  return (
    <div className={styles.ocean}>
      <div className={styles.wave} />
      <div className={styles.wave} />
      <div className={styles.wave} />
      <div className={styles.wave} />
    </div>
  )
}

export default Ocean
