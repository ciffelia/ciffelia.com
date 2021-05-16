import React from 'react'
import SectionBox from './SectionBox'
import Typography from './Typography'
import * as styles from './Skills.module.scss'

export default function Skills() {
  return (
    <SectionBox>
      <Typography>
        <h1>
          Skills <small>スキルセット</small>
        </h1>

        <h2>Webフロントエンド</h2>
        <p>最近はTypeScript + Next.js or Nuxt.jsでSPAを書くことが多いです。</p>
        <ul>
          <li>TypeScript</li>
          <li>React / Next.js / Gatsby (このページはGatsbyで作られています)</li>
          <li>Vue / Nuxt.js</li>
          <li>SCSS</li>
          <li>ESLint / Stylelint / Prettier</li>
          <li>Electron</li>
        </ul>

        <h2>Webバックエンド</h2>
        <p>TypeScript + Node.jsでREST APIサーバーを書くことがほとんどです。</p>
        <ul>
          <li>Node.js / Express / Koa / Fastify</li>
          <li>SQL / Prisma</li>
          <li>Puppeteer</li>
        </ul>

        <h2>Linux</h2>
        <p>VPSとRaspberry Piを24/7で3年ほど運用しています。</p>
        <ul>
          <li>Arch Linuxのインストール</li>
          <li>docker-composeでアプリケーション運用</li>
          <li>Traefik / Caddy (HTTPルーティング)</li>
          <li>dmcrypt + LUKS (フルシステム暗号化)</li>
          <li>ufw (アクセス制限)</li>
          <li>Mackerel (監視)</li>
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
          <li>Travis CI / CircleCI / Appveyor</li>
          <li>JetBrains IDE</li>
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
