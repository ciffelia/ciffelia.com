import React from 'react'
import { css } from '@emotion/react'
import { oceanHeight, oceanWidth } from './constants'
import Wave from './Wave'

const Ocean: React.VFC = () => {
  return (
    <div css={oceanStyle}>
      <Wave animation={{ from: 0, to: 1, duration: '9s', delay: '0s' }} />
      <Wave
        animation={{ from: 1.25, to: 0.25, duration: '13s', delay: '-3s' }}
      />
      <Wave animation={{ from: 1.5, to: 0.5, duration: '7s', delay: '-6s' }} />
      <Wave
        animation={{ from: 1.75, to: 0.75, duration: '5s', delay: '-2s' }}
      />
    </div>
  )
}

export default Ocean

const oceanStyle = css`
  position: relative;
  width: ${oceanWidth};
  height: ${oceanHeight};
`
