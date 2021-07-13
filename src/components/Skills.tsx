import React from 'react'
import SectionBox from './SectionBox'
import Typography from './Typography'

const Skills: React.FC = () => {
  return (
    <SectionBox>
      <Typography>
        <h1>
          Skills <small>スキルセット</small>
        </h1>

        <h2>Webフロントエンド</h2>
        <ul>
          <li>TypeScript</li>
          <li>React / Next.js / Gatsby</li>
          <li>Vue / Nuxt.js</li>
        </ul>

        <h2>Webバックエンド</h2>
        <ul>
          <li>Node.js / Express / Koa / Fastify</li>
          <li>Rust / warp</li>
          <li>SQL</li>
        </ul>

        <h2>Linux</h2>
        <p>VPSとRaspberry Piを3年ほど運用しています。</p>
        <ul>
          <li>Arch Linuxのインストール</li>
          <li>docker-composeでアプリケーション運用</li>
        </ul>

        <h2>開発ツール・インフラ</h2>
        <ul>
          <li>
            Git (commit, tag, push, merge, rebase, conflictの修正, interactive
            rebase など)
          </li>
          <li>GitHub (Issue, Pull Request, Projects, Actions)</li>
          <li>
            Docker (build, run, push, container/image/volume/networkの管理 など)
          </li>
        </ul>

        <h2>その他</h2>
        <ul>
          <li>競技プログラミング (AtCoder 緑)</li>
          <li>OSSへの貢献 (Issueを立てたりPull Requestを送ったり)</li>
          <li>C++ (templateやiteratorが使えるくらい)</li>
          <li>Python (ちょっとした自動化をしたり、CTFでexploitに使ったり)</li>
          <li>Go (echoで簡単なウェブアプリを作るくらい)</li>
          <li>Kotlin (Androidアプリ制作)</li>
          <li>
            Wiresharkでキャプチャしたパケットを眺められるくらいのネットワーク知識
          </li>
          <li>電子工作 (はんだ付けくらい)</li>
        </ul>

        <h2>自然言語</h2>
        <ul>
          <li>日本語 (ネイティブ)</li>
          <li>English (たいていのドキュメントが読めるくらい)</li>
        </ul>
      </Typography>
    </SectionBox>
  )
}

export default Skills
