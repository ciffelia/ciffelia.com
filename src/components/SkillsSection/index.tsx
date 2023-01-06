import React from 'react'
import styled from 'styled-components'
import { skillList } from '@/contents/skill'
import Section from '@/components/Section'
import InViewEffect from '@/components/InViewEffect'
import SkillCard from './SkillCard'

const SkillsSection: React.FC = React.memo(function SkillsSection() {
  return (
    <Section title="Skills" subtitle="スキルセット">
      <List>
        {skillList.map((skill) => (
          <ListItem key={skill.id}>
            <InViewEffect>
              <SkillCard skill={skill} />
            </InViewEffect>
          </ListItem>
        ))}
      </List>
    </Section>
  )
})

export default SkillsSection

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 16px;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
`
