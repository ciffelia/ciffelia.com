import React from 'react';
import styled from 'styled-components';
import { SPACING } from '@charcoal-ui/foundation';
import createTheme from '@charcoal-ui/styled';

const theme = createTheme(styled);

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
        <TitleContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleContainer>
        <div>{children}</div>
      </Container>
    </Wrapper>
  );
});

export default Section;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  ${theme((o) => o.padding.vertical(24))}

  :first-of-type {
    padding-top: 0;
  }

  :nth-of-type(2n) {
    background-color: var(--color-surface1);
  }
`;

const Container = styled.div`
  width: min(90%, 960px);
  display: grid;
  gap: ${SPACING['24']}px;
`;

const TitleContainer = styled.div`
  justify-self: start;
  border-bottom: var(--border1);
  display: flex;
  align-items: flex-end;
  gap: ${SPACING['8']}px;

  ${theme((o) => [o.padding.horizontal(4), o.padding.bottom(8)])}
`;

const Title = styled.h1`
  margin: 0;

  ${theme((o) => o.typography(32).bold)}
`;

const Subtitle = styled.small`
  opacity: 0.5;

  ${theme((o) => o.typography(16).bold)}
`;
