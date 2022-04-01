import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Image from 'next/image';
import { Work } from '@/contents/work';
import ExternalLink from '@/components/ExternalLink';
import Tag from './Tag';

export interface Props {
  work: Work;
}

const WorkCard: React.VFC<Props> = React.memo(function WorkCard({ work }) {
  return (
    <ExternalLink to={work.url}>
      <Container>
        <ImageContainer>
          <Image
            src={work.image}
            alt={work.title}
            layout="responsive"
            sizes="510px" // max width
          />
        </ImageContainer>
        <Description>
          <Title>{work.title}</Title>
          <Year>{work.year}</Year>
          <TagList>
            {work.tags.map((tag) => (
              <TagContainer key={tag}>
                <Tag name={tag} />
              </TagContainer>
            ))}
          </TagList>
        </Description>
      </Container>
    </ExternalLink>
  );
});

export default WorkCard;

const Container = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: #e1e4e8 solid 1px;
  overflow: hidden;
  background-color: var(--color-white);
  transition: border-color 0.2s, filter 0.2s;

  :hover {
    border-color: #979797;
    filter: drop-shadow(0 0 6px ${rgba('black', 0.16)});
  }
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
