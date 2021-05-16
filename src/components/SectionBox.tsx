import React from 'react'
import * as styles from './SectionBox.module.scss'

interface Props {
  children: React.ReactNode
}

export default function SectionBox(props: Props) {
  return <section className={styles.sectionBox}>{props.children}</section>
}
