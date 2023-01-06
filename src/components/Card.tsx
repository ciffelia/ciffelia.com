import styled from 'styled-components'

const Card = styled.div`
  overflow: hidden;
  background-color: var(--color-background1);
  border: var(--border1);
  border-radius: 4px;
  transition: border-color 0.15s var(--easing-pop),
    filter 0.15s var(--easing-pop), transform 0.15s var(--easing-pop);

  :hover {
    filter: drop-shadow(0 0 6px var(--color-shadow1));
    border: var(--border2);
    transform: scale(1.015);
  }
`

export default Card
