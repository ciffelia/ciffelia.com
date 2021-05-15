import React from 'react'
import { PageProps } from 'gatsby'
import Hero from '../components/Hero'
import * as styles from './index.module.scss'

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <section>
          <h2>Works</h2>
          <p>Hello world!</p>
          <p>Path: {props.path}</p>
        </section>
      </main>
    </>
  )
}
