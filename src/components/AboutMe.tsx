import React from 'react'
import SectionBox from './SectionBox'
import Typography from './Typography'
import * as styles from './AboueMe.module.scss'

export default function AboutMe() {
  return (
    <SectionBox>
      <Typography>
        <h1>
          About me <small>自己紹介</small>
        </h1>

        <div className={styles.longText}>
          <p>
            Web開発が好きな大学生です。プログラミングを始めて10年になります。ゲーム制作、競技プログラミング、電子工作、OS開発なども楽しんでいます。
          </p>
          <p>
            新しい技術を使ってみるのが好きです。趣味で作りたいものを思いついたときは、使ったことのない技術を選びがちです。
          </p>
        </div>
      </Typography>
    </SectionBox>
  )
}
