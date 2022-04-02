import React from 'react';
import styled from 'styled-components';

export interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.VFC<Props> = React.memo(function Section({
  title,
  subtitle,
  children,
}) {
  return (
    <Wrapper>
      <Container>
        <Title>
          {title} <Subtitle>{subtitle}</Subtitle>
        </Title>
        <div>{children}</div>
      </Container>
    </Wrapper>
  );
});

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
    background-color: var(--color-surface1);
  }
`;

const Container = styled.div`
  width: min(90%, 960px);
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 0 25px;
  padding: 0 3px;
  border-bottom: var(--border1);
  font-size: 2rem;
  line-height: 1.5;
`;

const Subtitle = styled.small`
  font-size: 0.5em;
  opacity: 0.5;
`;
