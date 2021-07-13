import React from 'react'
import * as styles from '../styles/Tag.module.scss'

interface Props {
  name: string
}

const Tag: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.tag}>
      <span>{name}</span>
    </div>
  )
}

export default Tag
