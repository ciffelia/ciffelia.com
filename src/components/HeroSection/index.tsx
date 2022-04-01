import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Image from 'next/image';
import Ocean from './Ocean';
import SocialLink from './SocialLink';
import ciffeliaIcon from '@/images/ciffelia.png';
import twitterIcon from '@/images/twitter.svg';
import githubIcon from '@/images/github.svg';

const HeroSection: React.VFC = React.memo(function HeroSection() {
  const [isIconLoaded, setIsIconLoaded] = useState(false);
  const handleIconLoad = useCallback(() => {
    setIsIconLoaded(true);
  }, []);

  return (
    <Header>
      <OceanContainer>
        <Ocean />
      </OceanContainer>

      <Myself>
        <IconContainer show={isIconLoaded}>
          <Image
            src={ciffeliaIcon}
            alt=""
            layout="responsive"
            sizes="min(20vw, 130px)" // max width
            priority
            onLoad={handleIconLoad}
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
  padding-top: 53px;
  padding-bottom: 75px;
  font-family: Quicksand, sans-serif;
  background-color: var(--color-ocean);
  color: var(--color-white);
`;

const OceanContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Myself = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 4px 7px ${rgba('black', 0.16)});
`;

const IconContainer = styled.div<{ show?: boolean }>`
  width: clamp(75px, 20vw, 130px);
  height: clamp(75px, 20vw, 130px);
  border-radius: 50%;
  overflow: hidden;
  opacity: ${({ show }) => (show === true ? 1 : 0)};
  transition: opacity 0.1s;
`;

const Name = styled.span`
  margin-left: clamp(20px, 6vw, 40px);
  font-weight: 600;
  font-size: clamp(64px, 16vw, 97px);
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
`;
