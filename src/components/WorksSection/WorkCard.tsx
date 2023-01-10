import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Work } from '@/contents/work'
import ExternalLink from '@/components/ExternalLink'
import Card from '@/components/Card'
import Tag from './Tag'

export interface Props {
  work: Work
}

const WorkCard: React.FC<Props> = React.memo(function WorkCard({ work }) {
  return (
    <ExternalLink to={work.url}>
      <StyledCard>
        <Thumbnail>
          <ThumbnailImage
            src={work.image}
            alt={work.name}
            sizes="510px" // max width
          />
        </Thumbnail>
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

const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
`

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: contain;
`

const Description = styled.div`
  display: grid;
  gap: 14px;
  width: 100%;
  padding: 16px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`

const Year = styled.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.8;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
`

const TagContainer = styled.li`
  list-style: none;
`
