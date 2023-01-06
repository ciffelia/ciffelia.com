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
  width: 100%;
  display: flex;
  justify-content: center;
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
  width: min(90%, 960px);
  display: grid;
  gap: 24px;
`

const StyledCoverEffect = styled(InViewEffect)`
  justify-self: start;
`

const TitleContainer = styled.div`
  border-bottom: var(--border1);
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 8px;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 32px;
`

const Subtitle = styled.small`
  opacity: 0.5;
  line-height: 1;
  font-size: 16px;
  font-weight: bold;
`
