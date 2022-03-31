import React from 'react';
import styled from '@emotion/styled';
import { rgba } from 'polished';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import ExternalLink from '@/components/ExternalLink';
import Tag from './Tag';

export interface Props {
  title: string;
  imageData: IGatsbyImageData;
  year: number;
  tags: string[];
  url: string;
}

const WorkCard: React.VFC<Props> = ({ title, imageData, year, tags, url }) => {
  return (
    <ExternalLink to={url}>
      <Container>
        <GatsbyImage image={imageData} alt={title} />
        <Description>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <TagList>
            {tags.map((tag) => (
              <TagContainer key={tag}>
                <Tag name={tag} />
              </TagContainer>
            ))}
          </TagList>
        </Description>
      </Container>
    </ExternalLink>
  );
};

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

const Description = styled.div`
  padding: 10px 20px 20px 20px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
`;

const Year = styled.p`
  margin: 4px 0 10px 0;
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
