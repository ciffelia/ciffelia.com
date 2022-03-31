import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import WorkCard from './WorkCard';

const WorksSection: React.VFC = () => {
  const data = useStaticQuery<GatsbyTypes.WorksQuery>(graphql`
    query Works {
      contentfulWorkList(name: { eq: "FeaturedWorks" }) {
        entries {
          id
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 512, quality: 80)
              }
            }
          }
          year
          tags
          url
        }
      }
    }
  `);

  if (typeof data.contentfulWorkList === 'undefined') {
    throw new Error('No entry named "FeaturedWorks" found.');
  }
  const works = data.contentfulWorkList.entries ?? [];

  return (
    <Section>
      <Typography>
        <h1>
          Works <small>制作物</small>
        </h1>

        <List>
          {works.map((work) => (
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            <ListItem key={work!.id}>
              <WorkCard
                title={work!.title!}
                imageData={
                  work!.image!.localFile!.childImageSharp!.gatsbyImageData
                }
                year={work!.year!}
                tags={(work!.tags ?? []) as string[]}
                url={work!.url!}
              />
            </ListItem>
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
          ))}
        </List>
      </Typography>
    </Section>
  );
};

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
