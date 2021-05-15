import React from 'react'
import * as styles from './ocean.module.scss'

export default function Ocean() {
  return (
    <div className={styles.ocean}>
      <div className={styles.wave} />
      <div className={styles.wave} />
      <div className={styles.wave} />
      <div className={styles.wave} />
    </div>
  )
}
