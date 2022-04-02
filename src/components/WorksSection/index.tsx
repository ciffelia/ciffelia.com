import React from 'react';
import styled from 'styled-components';
import { workList } from '@/contents/work';
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import WorkCard from './WorkCard';

const WorksSection: React.VFC = React.memo(function WorksSection() {
  return (
    <Section title="Works" subtitle="制作物">
      <Typography>
        <List>
          {workList.map((work) => (
            <ListItem key={work.id}>
              <WorkCard work={work} />
            </ListItem>
          ))}
        </List>
      </Typography>
    </Section>
  );
});

export default WorksSection;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  width: 31%;

  @media screen and (max-width: 880px) {
    width: 48%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
