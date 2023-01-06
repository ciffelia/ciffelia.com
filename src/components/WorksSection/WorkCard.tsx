import React from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'
import { Work } from '@/contents/work'
import ExternalLink from '@/components/ExternalLink'
import Card from '@/components/Card'
import Tag from './Tag'

export interface Props {
  work: Work
}

const WorkCard: React.VFC<Props> = React.memo(function WorkCard({ work }) {
  return (
    <ExternalLink to={work.url}>
      <StyledCard>
        <ImageContainer>
          <Image
            src={work.image}
            alt={work.name}
            layout="responsive"
            sizes="510px" // max width
          />
        </ImageContainer>
        <Description>
          <Title>{work.name}</Title>
          <Year>{work.year}</Year>
          <TagList>
            {work.tags.map((tag) => (
              <TagContainer key={tag}>
                <Tag>{tag}</Tag>
              </TagContainer>
            ))}
          </TagList>
        </Description>
      </StyledCard>
    </ExternalLink>
  )
})

export default WorkCard

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
`

const Description = styled.div`
  width: 100%;
  display: grid;
  gap: 14px;
  padding: 16px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`

const Year = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 16px;
`

const TagList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const TagContainer = styled.li`
  list-style: none;
`
