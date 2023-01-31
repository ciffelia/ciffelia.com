import React from 'react'
import styled from 'styled-components'
import type { Skill } from '@/contents/skill/schema'
import Section from '@/components/Section'
import InViewEffect from '@/components/InViewEffect'
import SkillCard from './SkillCard'

export interface SkillsSectionProps {
  skills: Skill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => (
  <Section title="Skills" subtitle="スキルセット">
    <List>
      {skills.map((skill) => (
        <ListItem key={skill.id}>
          <InViewEffect>
            <SkillCard skill={skill} />
          </InViewEffect>
        </ListItem>
      ))}
    </List>
  </Section>
)

export default SkillsSection

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, clamp(150px, 20vw, 200px));
  gap: 16px;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
`
