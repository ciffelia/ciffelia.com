import React from 'react';
import type { NextPage } from 'next';
import Head from '@/components/Head';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import SkillsSection from '@/components/SkillsSection';
import WorksSection from '@/components/WorksSection';

const IndexPage: NextPage = React.memo(function IndexPage() {
  return (
    <>
      <Head />
      <HeroSection />
      <main>
        <ProfileSection />
        <SkillsSection />
        <WorksSection />
      </main>
    </>
  );
});

export default IndexPage;
