import React from 'react'
import { FaGraduationCap, FaLayerGroup, FaRegLightbulb } from 'react-icons/fa'
import SectionBox from './SectionBox'
import Typography from './Typography'
import * as styles from '../styles/AboueMe.module.scss'

const AboutMe: React.FC = () => {
  return (
    <SectionBox>
      <Typography>
        <h1>
          About me <small>自己紹介</small>
        </h1>

        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <p>
              <span className={styles.icon}>
                <FaGraduationCap />
              </span>
              <span className={styles.description}>
                Web開発が好きな大学生です。プログラミングを始めて10年になります。
              </span>
            </p>
            <p>
              <span className={styles.icon}>
                <FaLayerGroup />
              </span>
              <span className={styles.description}>
                Web以外にも、ゲーム制作、電子工作、OS開発など様々な分野で遊んでいます。
              </span>
            </p>
            <p>
              <span className={styles.icon}>
                <FaRegLightbulb />
              </span>
              <span className={styles.description}>
                新しい技術に触れるのが好きで、積極的に情報収集しています。
              </span>
            </p>
          </div>
        </div>
      </Typography>
    </SectionBox>
  )
}

export default AboutMe
