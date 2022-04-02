import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Ocean from './Ocean';
import SocialLink from './SocialLink';
import ciffeliaIcon from '@/images/ciffelia.png';
import twitterIcon from '@/images/twitter.svg';
import githubIcon from '@/images/github.svg';

const HeroSection: React.VFC = React.memo(function HeroSection() {
  return (
    <Header>
      <OceanContainer>
        <Ocean />
      </OceanContainer>

      <Myself>
        <IconContainer>
          <Image
            src={ciffeliaIcon}
            alt=""
            layout="responsive"
            sizes="min(20vw, 130px)" // max width
            priority
          />
        </IconContainer>
        <Name>Ciffelia</Name>
      </Myself>

      <Links>
        <SocialLink
          name="Twitter"
          url="https://twitter.com/ciffelia"
          color="var(--color-twitter)"
          iconPath={twitterIcon}
        />
        <SocialLink
          name="GitHub"
          url="https://github.com/ciffelia"
          color="var(--color-github)"
          iconPath={githubIcon}
        />
      </Links>
    </Header>
  );
});

export default HeroSection;

const Header = styled.header`
  position: relative;
  height: 350px;
  font-family: Quicksand, sans-serif;
  background-color: var(--color-ocean);
  color: var(--color-text2);
`;

const OceanContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Myself = styled.div`
  position: absolute;
  top: 53px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 4px 7px var(--color-shadow1));
`;

const IconContainer = styled.div`
  width: clamp(75px, 20vw, 130px);
  height: clamp(75px, 20vw, 130px);
  border-radius: 50%;
  overflow: hidden;
`;

const Name = styled.span`
  margin-left: clamp(20px, 6vw, 40px);
  font-weight: 600;
  font-size: clamp(64px, 16vw, 97px);
`;

const Links = styled.div`
  position: absolute;
  bottom: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
