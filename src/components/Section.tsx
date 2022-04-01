import React from 'react';
import styled from 'styled-components';

export interface Props {
  children: React.ReactNode;
}

const Section: React.VFC<Props> = (props) => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: center;

  :first-of-type {
    padding-top: 0;
  }

  :nth-of-type(2n) {
    background-color: #f7f7f7;
  }
`;

const Container = styled.div`
  width: min(90%, 960px);
`;
