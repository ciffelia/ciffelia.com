import React from 'react'
import { css } from '@emotion/react'

interface Props {
  name: string
}

const Tag: React.VFC<Props> = ({ name }) => {
  return (
    <div css={style}>
      <span>{name}</span>
    </div>
  )
}

const style = css`
  padding: 0.2em 0.8em;
  border-radius: 5px;
  border: #e1e4e8 solid 1px;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Tag
