import React from 'react'
import * as styles from '../styles/Tag.module.scss'

interface Props {
  name: string
}

export default function Tag({ name }: Props) {
  return (
    <div className={styles.tag}>
      <span>{name}</span>
    </div>
  )
}
