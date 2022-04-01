import React from 'react';
import styled from 'styled-components';

export interface Props {
  name: string;
}

const Tag: React.VFC<Props> = React.memo(function Tag({ name }) {
  return (
    <Container>
      <span>{name}</span>
    </Container>
  );
});

export default Tag;

const Container = styled.div`
  padding: 0.2em 0.8em;
  border-radius: 5px;
  border: var(--border1);
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
