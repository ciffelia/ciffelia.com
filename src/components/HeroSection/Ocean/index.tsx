import React from 'react'
import styled from 'styled-components'
import { oceanHeight, oceanWidth } from './constants'
import Wave from './Wave'

const Ocean: React.FC = () => (
  <Container>
    {waveAnimations.map((animation, i) => (
      <Wave key={i} animation={animation} />
    ))}
  </Container>
)

export default Ocean

const Container = styled.div`
  position: relative;
  width: ${oceanWidth};
  height: ${oceanHeight};
`

const waveAnimations = [
  { from: 0, to: 1, duration: '9s', delay: '0s' },
  { from: 1.25, to: 0.25, duration: '13s', delay: '-3s' },
  { from: 1.5, to: 0.5, duration: '7s', delay: '-6s' },
  { from: 1.75, to: 0.75, duration: '5s', delay: '-2s' },
] as const
