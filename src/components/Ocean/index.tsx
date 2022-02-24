import React from 'react'
import { css } from '@emotion/react'
import { oceanHeight, oceanWidth } from './constants'
import Wave from './Wave'

const Ocean: React.FC = () => {
  return (
    <div css={oceanStyle}>
      <Wave
        animation={{
          from: 0,
          to: 1,
          duration: '9s',
          delay: '0s',
          direction: 'normal'
        }}
      />
      <Wave
        animation={{
          from: 1.25,
          to: 0.25,
          duration: '13s',
          delay: '-3s',
          direction: 'normal'
        }}
      />
      <Wave
        animation={{
          from: 0.5,
          to: 1.5,
          duration: '7s',
          delay: '-6s',
          direction: 'reverse'
        }}
      />
      <Wave
        animation={{
          from: 1.75,
          to: 0.75,
          duration: '5s',
          delay: '-2s',
          direction: 'normal'
        }}
      />
    </div>
  )
}

const oceanStyle = css`
  position: relative;
  width: ${oceanWidth};
  height: ${oceanHeight};
`

export default Ocean
