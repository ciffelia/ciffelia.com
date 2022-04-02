import React from 'react';
import styled from 'styled-components';

export interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Paragraph: React.VFC<Props> = React.memo(function Paragraph({
  icon,
  children,
}) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Description>{children}</Description>
    </Container>
  );
});

export default Paragraph;

const Container = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75em;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.75em;
`;

const Description = styled.span`
  text-align: justify;
`;