import React from 'react'
import * as styles from '../styles/SectionBox.module.scss'

interface Props {
  children: React.ReactNode
}

const SectionBox: React.FC<Props> = (props) => {
  return <section className={styles.sectionBox}>{props.children}</section>
}

export default SectionBox
