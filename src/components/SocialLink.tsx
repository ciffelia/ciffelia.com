import React from 'react'
import { css } from '@emotion/react'
import ExternalLink from './ExternalLink'

export interface Props {
  name: string
  url: string
  color: string
  iconPath: string
}

const SocialLink: React.VFC<Props> = (props) => {
  return (
    <ExternalLink to={props.url}>
      <div css={style} style={{ backgroundColor: props.color }}>
        <img css={iconStyle} src={props.iconPath} alt="" />
        <span css={nameStyle}>{props.name}</span>
      </div>
    </ExternalLink>
  )
}

export default SocialLink

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(40px, 8vw, 50px);
  margin: 0 clamp(15px, 6vw, 50px);
  padding: 6px 12px;
  border-radius: 12px;
  filter: drop-shadow(0 4px 7px rgba(0, 0, 0, 16%));
  transition: filter 0.5s ease-out, transform 0.5s ease-out;

  :hover {
    filter: drop-shadow(0 4px 7px rgba(0, 0, 0, 32%));
    transform: scale(1.02);
  }
`

const iconStyle = css`
  width: clamp(29px, 6vw, 36px);
`

const nameStyle = css`
  margin-left: clamp(9px, 17vw, 11px);
  color: var(--color-white);
  font-weight: 600;
  font-size: clamp(22px, 4vw, 27px);
`
