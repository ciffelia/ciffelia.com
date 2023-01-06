import React from 'react'
import styled from 'styled-components'

export interface Props {
  icon: React.ReactNode
  children: React.ReactNode
}

const Paragraph: React.FC<Props> = React.memo(function Paragraph({
  icon,
  children,
}) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Description>{children}</Description>
    </Container>
  )
})

export default Paragraph

const Container = styled.p`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 0;
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  font-size: 32px;
`

const Description = styled.span`
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
`
