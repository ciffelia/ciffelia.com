import React from 'react'
import * as styles from '../styles/Typography.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Typography(props: Props) {
  return <div className={styles.typography}>{props.children}</div>
}
