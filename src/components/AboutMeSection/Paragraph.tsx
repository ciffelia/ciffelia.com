import React from 'react';
import styled from '@emotion/styled';

export interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Paragraph: React.VFC<Props> = ({ icon, children }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Description>{children}</Description>
    </Container>
  );
};

export default Paragraph;

const Container = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

const Icon = styled.span`
  font-size: 1.75em;
`;

const Description = styled.span`
  text-align: justify;
`;
