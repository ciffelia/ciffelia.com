import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import ExternalLink from './ExternalLink'
import Tag from './Tag'
import * as styles from '../styles/WorkCard.module.scss'

interface Props {
  title: string
  imageData: IGatsbyImageData
  year: number
  tags: string[]
  url: string
}

const WorkCard: React.FC<Props> = ({ title, imageData, year, tags, url }) => {
  return (
    <ExternalLink to={url}>
      <article className={styles.card}>
        <GatsbyImage image={imageData} alt={title} />
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.year}>{year}</p>
          <ul className={styles.tagList}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag name={tag} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ExternalLink>
  )
}

export default WorkCard
