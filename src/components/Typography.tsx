import React from 'react'
import * as styles from '../styles/Typography.module.scss'

interface Props {
  children: React.ReactNode
}

const Typography: React.FC<Props> = (props) => {
  return <div className={styles.typography}>{props.children}</div>
}

export default Typography
