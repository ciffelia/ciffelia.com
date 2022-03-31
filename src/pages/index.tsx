import React from 'react';
import { PageProps } from 'gatsby';
import Head from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import SkillsSection from '@/components/SkillsSection';
import WorksSection from '@/components/WorksSection';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <Head />
      <HeroSection />
      <main>
        <AboutMeSection />
        <SkillsSection />
        <WorksSection />
      </main>
    </>
  );
};

export default IndexPage;
