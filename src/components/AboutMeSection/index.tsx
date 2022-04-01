import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaLayerGroup, FaRegLightbulb } from 'react-icons/fa';
import Section from '@/components/Section';
import Typography from '@/components/Typography';
import Paragraph from './Paragraph';

const AboutMeSection: React.VFC = React.memo(function AboutMeSection() {
  return (
    <Section>
      <Typography>
        <h1>
          About me <small>自己紹介</small>
        </h1>

        <ListWrapper>
          <List>
            <Paragraph icon={<FaGraduationCap />}>
              Web開発が大好きな大学生です。プログラミングを始めて10年になります。
            </Paragraph>
            <Paragraph icon={<FaLayerGroup />}>
              ゲーム制作、電子工作、OS開発など様々な分野で活動しています。
            </Paragraph>
            <Paragraph icon={<FaRegLightbulb />}>
              新しい技術に触れるのが好きで、積極的に情報収集しています。
            </Paragraph>
          </List>
        </ListWrapper>
      </Typography>
    </Section>
  );
});

export default AboutMeSection;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;
