import React from 'react';
import { css } from '@emotion/react';
import { rgba } from 'polished';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import ExternalLink from './ExternalLink';
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
      <article css={cardStyle}>
        <GatsbyImage image={imageData} alt={title} />
        <div css={descriptionStyle}>
          <h2 css={titleStyle}>{title}</h2>
          <p css={yearStyle}>{year}</p>
          <ul css={tagListStyle}>
            {tags.map((tag) => (
              <li key={tag} css={tagStyle}>
                <Tag name={tag} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ExternalLink>
  );
};

export default WorkCard;

const cardStyle = css`
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

const descriptionStyle = css`
  padding: 10px 20px 20px 20px;
  width: 100%;
`;

const titleStyle = css`
  margin: 0;
`;

const yearStyle = css`
  margin: 4px 0 10px 0;
  opacity: 0.8;
`;

const tagListStyle = css`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const tagStyle = css`
  list-style: none;
`;
