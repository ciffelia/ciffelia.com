import React from 'react'
import ExternalLink from './ExternalLink'
import * as styles from '../styles/SocialLink.module.scss'

interface Props {
  name: string
  url: string
  color: string
  iconPath: string
}

const SocialLink: React.FC<Props> = (props) => {
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

export default SocialLink
