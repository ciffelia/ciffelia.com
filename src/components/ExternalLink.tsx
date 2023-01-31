import React from 'react'
import styled from 'styled-components'

export interface Props {
  to: string
  children: React.ReactNode
}

const ExternalLink: React.FC<Props> = (props) => (
  <StyledLink href={props.to} target="_blank" rel="noopener noreferrer">
    {props.children}
  </StyledLink>
)

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`

export default ExternalLink
