import React from 'react';
import { css } from '@emotion/react';
import { FaGraduationCap, FaLayerGroup, FaRegLightbulb } from 'react-icons/fa';
import SectionBox from '../SectionBox';
import Typography from '../Typography';
import Paragraph from './Paragraph';

const AboutMe: React.VFC = () => {
  return (
    <SectionBox>
      <Typography>
        <h1>
          About me <small>自己紹介</small>
        </h1>

        <div css={listWrapperStyle}>
          <div css={listStyle}>
            <Paragraph icon={<FaGraduationCap />}>
              Web開発が大好きな大学生です。プログラミングを始めて10年になります。
            </Paragraph>
            <Paragraph icon={<FaLayerGroup />}>
              ゲーム制作、電子工作、OS開発など様々な分野で活動しています。
            </Paragraph>
            <Paragraph icon={<FaRegLightbulb />}>
              新しい技術に触れるのが好きで、積極的に情報収集しています。
            </Paragraph>
          </div>
        </div>
      </Typography>
    </SectionBox>
  );
};

export default AboutMe;

const listWrapperStyle = css`
  display: flex;
  justify-content: center;
`;

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;
