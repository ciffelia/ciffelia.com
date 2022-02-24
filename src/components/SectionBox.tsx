import React from 'react'
import { css } from '@emotion/react'

interface Props {
  children: React.ReactNode
}

const SectionBox: React.VFC<Props> = (props) => {
  return (
    <section css={sectionStyle}>
      <div css={containerStyle}>{props.children}</div>
    </section>
  )
}

const sectionStyle = css`
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: center;

  :first-child {
    padding-top: 0;
  }

  :nth-child(2n) {
    background-color: #f7f7f7;
  }
`

const containerStyle = css`
  width: min(90%, 960px);
`

export default SectionBox
