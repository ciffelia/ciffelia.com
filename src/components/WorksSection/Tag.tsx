import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  name: string;
}

const Tag: React.VFC<Props> = ({ name }) => {
  return (
    <Container>
      <span>{name}</span>
    </Container>
  );
};

export default Tag;

const Container = styled.div`
  padding: 0.2em 0.8em;
  border-radius: 5px;
  border: #e1e4e8 solid 1px;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
