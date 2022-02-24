import React from 'react'
import { css } from '@emotion/react'

export interface Props {
  icon: React.ReactNode
  children: React.ReactNode
}

const Paragraph: React.VFC<Props> = ({ icon, children }) => {
  return (
    <p css={paragraphStyle}>
      <span css={iconStyle}>{icon}</span>
      <span css={descriptionStyle}>{children}</span>
    </p>
  )
}

export default Paragraph

const paragraphStyle = css`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const iconStyle = css`
  font-size: 1.5em;
`

const descriptionStyle = css`
  text-align: justify;
`
