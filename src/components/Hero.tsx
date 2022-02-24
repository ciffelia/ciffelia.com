import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import Ocean from './Ocean'
import SocialLink from './SocialLink'
import twitterIcon from '../images/twitter.svg'
import githubIcon from '../images/github.svg'

const Hero: React.VFC = () => {
  return (
    <header css={heroStyle}>
      <div css={oceanContainerStyle}>
        <Ocean />
      </div>

      <div css={myselfStyle}>
        <StaticImage
          css={iconStyle}
          src="../images/ciffelia.png"
          alt=""
          loading="eager"
          width={130} // Max width
        />
        <span css={nameStyle}>Ciffelia</span>
      </div>

      <div css={socialLinkListStyle}>
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

export default Hero

const heroStyle = css`
  position: relative;
  padding-top: 53px;
  padding-bottom: 75px;
  font-family: Quicksand, sans-serif;
  background-color: var(--color-ocean);
  color: var(--color-white);
`

const oceanContainerStyle = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const myselfStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 4px 7px rgba(0, 0, 0, 16%));
`

const iconStyle = css`
  width: clamp(75px, 20vw, 130px);
  height: clamp(75px, 20vw, 130px);
  border-radius: 50%;
`

const nameStyle = css`
  margin-left: clamp(20px, 6vw, 40px);
  font-weight: 600;
  font-size: clamp(64px, 16vw, 97px);
`

const socialLinkListStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
`
