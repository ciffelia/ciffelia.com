import { type StaticImageData } from 'next/image'

export interface Skill {
  id: SkillId
  name: string
  level: SkillLevel
  image: StaticImageData
}

export type SkillLevel = ExperienceSince | SkillLevelDescription

export interface ExperienceSince {
  type: 'since'
  year: number
  month?: number
}

export interface SkillLevelDescription {
  type: 'description'
  value: string
}

// 辞書順に並べる
export enum SkillId {
  Cpp = 'cpp',
  Docker = 'docker',
  Gatsby = 'gatsby',
  Git = 'git',
  JavaScript = 'javaScript',
  Kubernetes = 'kubernetes',
  NextJs = 'nextJs',
  NodeJs = 'nodeJs',
  Nuxt = 'nuxtJs',
  PHP = 'php',
  React = 'react',
  Rust = 'rust',
  TypeScript = 'typeScript',
  VueJs = 'vueJs',
}
