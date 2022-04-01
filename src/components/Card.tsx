import styled from 'styled-components';
import { rgba } from 'polished';

const Card = styled.div`
  border-radius: 5px;
  border: #e1e4e8 solid 1px;
  overflow: hidden;
  background-color: var(--color-white);
  transition: border-color 0.2s, filter 0.2s;

  :hover {
    border-color: #979797;
    filter: drop-shadow(0 0 6px ${rgba('black', 0.16)});
  }
`;

export default Card;
