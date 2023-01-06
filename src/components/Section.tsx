import React from 'react'
import styled from 'styled-components'
import InViewEffect from '@/components/InViewEffect'

export interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
}

const Section: React.VFC<Props> = React.memo(function Section({
  title,
  subtitle,
  children,
}) {
  return (
    <Wrapper>
      <Container>
        <StyledCoverEffect>
          <TitleContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TitleContainer>
        </StyledCoverEffect>
        <div>{children}</div>
      </Container>
    </Wrapper>
  )
})

export default Section

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;

  :first-of-type {
    padding-top: 0;
  }

  :nth-of-type(2n) {
    background-color: var(--color-surface1);
  }
`

const Container = styled.div`
  display: grid;
  gap: 24px;
  width: min(90%, 960px);
`

const StyledCoverEffect = styled(InViewEffect)`
  justify-self: start;
`

const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding-right: 4px;
  padding-bottom: 8px;
  padding-left: 4px;
  border-bottom: var(--border1);
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1;
`

const Subtitle = styled.small`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  opacity: 0.5;
`
