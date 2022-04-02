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

  h2 {
    font-size: 1.5rem;
  }
`;
