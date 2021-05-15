import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Ocean from './Ocean'
import SocialLink from './SocialLink'
import twitterIcon from '../images/twitter.svg'
import githubIcon from '../images/github.svg'
import * as styles from './Hero.module.scss'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.oceanContainer}>
        <Ocean />
      </div>

      <div className={styles.myself}>
        <StaticImage
          className={styles.icon}
          src="../images/ciffelia.png"
          alt=""
          loading="eager"
          width={130} // Max width
        />
        <span className={styles.name}>Ciffelia</span>
      </div>

      <div className={styles.socialLinks}>
        <SocialLink
          name="Twitter"
          url="https://twitter.com/ciffelia"
          color="#1da1f2"
          iconPath={twitterIcon}
        />
        <SocialLink
          name="GitHub"
          url="https://github.com/ciffelia"
          color="#231f20"
          iconPath={githubIcon}
        />
      </div>
    </header>
  )
}
