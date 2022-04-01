import React from 'react';
import styled from 'styled-components';

export interface Props {
  children: React.ReactNode;
}

const Typography: React.VFC<Props> = React.memo(function Typography(props) {
  return <Container>{props.children}</Container>;
});

export default Typography;

const Container = styled.div`
  font-size: 1.07rem;
  line-height: 1.5;

  h1 {
    margin-top: 0;
    width: 100%;
    border: var(--border1);
    border-radius: 10px;
    box-shadow: 0 2px 2px var(--color-shadow1);
    background-color: white;
    font-size: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
  }

  small {
    font-size: 50%;
    opacity: 0.5;
  }
`;
