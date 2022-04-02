import React from 'react';
import styled from 'styled-components';
import { SPACING } from '@charcoal-ui/foundation';
import { FaGraduationCap, FaLayerGroup, FaRegLightbulb } from 'react-icons/fa';
import Section from '@/components/Section';
import Paragraph from './Paragraph';

const ProfileSection: React.VFC = React.memo(function AboutMeSection() {
  return (
    <Section title="Profile" subtitle="基本情報">
      <ListWrapper>
        <List>
          <Paragraph icon={<FaGraduationCap />}>
            ソフトウェア開発が好きな大学生です。プログラミングを始めて10年になります。
          </Paragraph>
          <Paragraph icon={<FaLayerGroup />}>
            Webアプリ、ゲーム、小型デバイス、OSなど様々なものを制作しています。
          </Paragraph>
          <Paragraph icon={<FaRegLightbulb />}>
            2018年からLinuxサーバーを運用しており、自作のWebアプリや情報収集ツールがDockerコンテナの中で動いています。
          </Paragraph>
        </List>
      </ListWrapper>
    </Section>
  );
});

export default ProfileSection;

const ListWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding: 0 min(12vw, 128px);

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING['16']}px;
`;
