import React from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'
import ExternalLink from '@/components/ExternalLink'

export interface Props {
  name: string
  url: string
  color: string
  iconPath: string
}

const SocialLink: React.VFC<Props> = React.memo(function SocialLink({
  name,
  url,
  color,
  iconPath,
}) {
  return (
    <ExternalLink to={url}>
      <Container color={color}>
        <IconContainer>
          <Image src={iconPath} alt="" layout="responsive" />
        </IconContainer>
        <Name>{name}</Name>
      </Container>
    </ExternalLink>
  )
})

export default SocialLink

const Container = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(40px, 8vw, 50px);
  padding: 6px 12px;
  background-color: ${({ color }) => color};
  filter: drop-shadow(0 4px 7px var(--color-shadow1));
  border-radius: 12px;
  transition: filter 0.15s var(--easing-pop), transform 0.15s var(--easing-pop);

  :hover {
    filter: drop-shadow(0 4px 7px var(--color-shadow2));
    transform: scale(1.1);
  }
`

const IconContainer = styled.div`
  width: clamp(29px, 6vw, 36px);
`

const Name = styled.span`
  margin-left: clamp(9px, 17vw, 11px);
  font-family: Quicksand, sans-serif;
  font-size: clamp(22px, 4vw, 27px);
  font-weight: 600;
  color: var(--color-text2);
`
