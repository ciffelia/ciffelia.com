import React from 'react'
import { css } from '@emotion/react'
import { FaGraduationCap, FaLayerGroup, FaRegLightbulb } from 'react-icons/fa'
import SectionBox from './SectionBox'
import Typography from './Typography'

const AboutMe: React.FC = () => {
  return (
    <SectionBox>
      <Typography>
        <h1>
          About me <small>自己紹介</small>
        </h1>

        <div css={listWrapperStyle}>
          <div css={listStyle}>
            <p css={listItemStyle}>
              <span css={iconStyle}>
                <FaGraduationCap />
              </span>
              <span css={descriptionStyle}>
                Web開発が好きな大学生です。プログラミングを始めて10年になります。
              </span>
            </p>
            <p css={listItemStyle}>
              <span css={iconStyle}>
                <FaLayerGroup />
              </span>
              <span css={descriptionStyle}>
                Web以外にも、ゲーム制作、電子工作、OS開発など様々な分野で遊んでいます。
              </span>
            </p>
            <p css={listItemStyle}>
              <span css={iconStyle}>
                <FaRegLightbulb />
              </span>
              <span css={descriptionStyle}>
                新しい技術に触れるのが好きで、積極的に情報収集しています。
              </span>
            </p>
          </div>
        </div>
      </Typography>
    </SectionBox>
  )
}

const listWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const listItemStyle = css`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const iconStyle = css`
  font-size: 1.5em;
`

const descriptionStyle = css`
  text-align: justify;
`

export default AboutMe
