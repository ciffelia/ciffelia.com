import React from 'react'
import * as styles from './socialLink.module.scss'
import ExternalLink from './externalLink'

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
