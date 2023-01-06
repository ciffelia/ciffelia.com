import React from 'react'
import styled from 'styled-components'
import { SPACING } from '@charcoal-ui/foundation'
import createTheme from '@charcoal-ui/styled'

const theme = createTheme(styled)

export interface Props {
  icon: React.ReactNode
  children: React.ReactNode
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
  )
})

export default Paragraph

const Container = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${SPACING['16']}px;
`

const Icon = styled.span`
  display: flex;
  align-items: center;

  ${theme((o) => o.typography(32).preserveHalfLeading)}
`

const Description = styled.span`
  text-align: justify;

  ${theme((o) => o.typography(16))}
`
