import React from 'react'
import * as styles from '../styles/SectionBox.module.scss'

interface Props {
  children: React.ReactNode
}

const SectionBox: React.FC<Props> = (props) => {
  return (
    <section className={styles.sectionBox}>
      <div className={styles.inner}>{props.children}</div>
    </section>
  )
}

export default SectionBox
