import React from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'
import InViewEffect from '@/components/InViewEffect'
import Ocean from './Ocean'
import SocialLink from './SocialLink'
import ciffeliaIcon from '@/images/ciffelia.png'
import twitterIcon from '@/images/twitter.svg'
import githubIcon from '@/images/github.svg'

const HeroSection: React.FC = React.memo(function HeroSection() {
  return (
    <Header>
      <OceanContainer>
        <Ocean />
      </OceanContainer>

      <Myself>
        <IconContainer>
          <InViewEffect>
            <Image
              src={ciffeliaIcon}
              alt=""
              layout="responsive"
              sizes="min(20vw, 130px)" // max width
              priority
            />
          </InViewEffect>
        </IconContainer>
        <Name>
          <InViewEffect>Ciffelia</InViewEffect>
        </Name>
      </Myself>

      <Links>
        <InViewEffect>
          <SocialLink
            name="Twitter"
            url="https://twitter.com/ciffelia"
            color="var(--color-twitter)"
            iconPath={twitterIcon}
          />
        </InViewEffect>
        <InViewEffect>
          <SocialLink
            name="GitHub"
            url="https://github.com/ciffelia"
            color="var(--color-github)"
            iconPath={githubIcon}
          />
        </InViewEffect>
      </Links>
    </Header>
  )
})

export default HeroSection

const Header = styled.header`
  position: relative;
  height: 350px;
  color: var(--color-text2);
  background-color: var(--color-ocean);
`

const OceanContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Myself = styled.div`
  position: absolute;
  top: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  filter: drop-shadow(0 4px 7px var(--color-shadow1));
`

const IconContainer = styled.div`
  width: clamp(75px, 20vw, 130px);
  height: clamp(75px, 20vw, 130px);
  overflow: hidden;
  border-radius: 50%;
`

const Name = styled.span`
  margin-left: clamp(20px, 6vw, 40px);
  font-family: Quicksand, sans-serif;
  font-size: clamp(64px, 16vw, 97px);
  font-weight: 600;
`

const Links = styled.div`
  position: absolute;
  bottom: 75px;
  display: flex;
  column-gap: clamp(30px, 12vw, 100px);
  align-items: center;
  justify-content: center;
  width: 100%;
`
