import React from 'react';
import styled from 'styled-components';
import { SPACING } from '@charcoal-ui/foundation';
import { skillList } from '@/contents/skill';
import Section from '@/components/Section';
import SkillCard from './SkillCard';

const SkillsSection: React.VFC = React.memo(function SkillsSection() {
  return (
    <Section title="Skills" subtitle="スキルセット">
      <List>
        {skillList.map((skill) => (
          <ListItem key={skill.id}>
            <SkillCard skill={skill} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
});

export default SkillsSection;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: ${SPACING['16']}px;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;
