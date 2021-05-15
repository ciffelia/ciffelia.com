import React from 'react'
import ExternalLink from './ExternalLink'
import * as styles from './SocialLink.module.scss'

interface Props {
  name: string
  url: string
  color: string
  iconPath: string
}

export default function SocialLink(props: Props) {
  return (
    <ExternalLink to={props.url}>
      <div
        className={styles.socialLink}
        style={{ backgroundColor: props.color }}
      >
        <img className={styles.icon} src={props.iconPath} alt="" />
        <span className={styles.name}>{props.name}</span>
      </div>
    </ExternalLink>
  )
}
