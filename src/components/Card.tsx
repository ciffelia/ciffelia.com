import styled from 'styled-components'
import createTheme from '@charcoal-ui/styled'

const theme = createTheme(styled)

const Card = styled.div`
  border: var(--border1);
  overflow: hidden;
  background-color: var(--color-background1);
  transition: border-color 0.15s var(--easing-pop),
    filter 0.15s var(--easing-pop), transform 0.15s var(--easing-pop);

  ${theme((o) => o.borderRadius(4))}

  :hover {
    border: var(--border2);
    filter: drop-shadow(0 0 6px var(--color-shadow1));
    transform: scale(1.015);
  }
`

export default Card
