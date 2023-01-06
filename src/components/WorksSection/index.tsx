import React from 'react'
import styled from 'styled-components'
import { workList } from '@/contents/work'
import Section from '@/components/Section'
import InViewEffect from '@/components/InViewEffect'
import WorkCard from './WorkCard'

const WorksSection: React.VFC = React.memo(function WorksSection() {
  return (
    <Section title="Works" subtitle="制作物">
      <List>
        {workList.map((work) => (
          <ListItem key={work.id}>
            <InViewEffect>
              <WorkCard work={work} />
            </InViewEffect>
          </ListItem>
        ))}
      </List>
    </Section>
  )
})

export default WorksSection

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 16px;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  list-style: none;
  width: 31%;

  @media screen and (max-width: 880px) {
    width: 48%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
