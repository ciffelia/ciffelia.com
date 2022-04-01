import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  border: var(--border1);
  overflow: hidden;
  background-color: var(--color-background1);
  transition: border-color 0.15s var(--easing1), filter 0.15s var(--easing1),
    transform 0.15s var(--easing1);

  :hover {
    border: var(--border2);
    filter: drop-shadow(0 0 6px var(--color-shadow1));
    transform: scale(1.015);
  }
`;

export default Card;
