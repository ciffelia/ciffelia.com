import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import type { Skill } from '@/contents/skill/schema'
import { loadSkills } from '@/contents/skill/loadSkills'
import Head from '@/components/Head'
import HeroSection from '@/components/HeroSection'
import ProfileSection from '@/components/ProfileSection'
import SkillsSection from '@/components/SkillsSection'
import WorksSection from '@/components/WorksSection'

export interface IndexPageProps {
  skills: Skill[]
}

const IndexPage: NextPage<IndexPageProps> = ({ skills }) => (
  <>
    <Head />
    <HeroSection />
    <main>
      <ProfileSection />
      <SkillsSection skills={skills} />
      <WorksSection />
    </main>
  </>
)

export default IndexPage

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const skills = await loadSkills()

  return {
    props: { skills },
  }
}
