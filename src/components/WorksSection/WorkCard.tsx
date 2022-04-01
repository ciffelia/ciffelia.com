import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Work } from '@/contents/work';
import ExternalLink from '@/components/ExternalLink';
import Card from '@/components/Card';
import Tag from './Tag';

export interface Props {
  work: Work;
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
                <Tag name={tag} />
              </TagContainer>
            ))}
          </TagList>
        </Description>
      </StyledCard>
    </ExternalLink>
  );
});

export default WorkCard;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
`;

const Description = styled.div`
  padding: 10px 20px 20px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
`;

const Year = styled.p`
  margin: 4px 0 10px;
  opacity: 0.8;
`;

const TagList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TagContainer = styled.li`
  list-style: none;
`;
