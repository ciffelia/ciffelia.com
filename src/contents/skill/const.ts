import { Skill, SkillId } from './type';

// 画像のimportは辞書順に並べる
import cppImage from './assets/cpp.svg';
import dockerImage from './assets/docker.webp';
import gatsbyImage from './assets/gatsby.svg';
import gitImage from './assets/git.svg';
import javaScriptImage from './assets/javaScript.svg';
import nextJsImage from './assets/nextJs.svg';
import nodeJsImage from './assets/nodeJs.svg';
import nuxtJsImage from './assets/nuxt.svg';
import phpImage from './assets/php.svg';
import reactImage from './assets/react.svg';
import rustImage from './assets/rust.svg';
import typeScriptImage from './assets/typeScript.svg';
import vueImage from './assets/vueJs.svg';

// 辞書順に並べる
export const skill: { [id in SkillId]: Skill } = {
  [SkillId.Cpp]: {
    id: SkillId.Cpp,
    name: 'C++',
    level: { type: 'since', year: 2015 },
    image: cppImage,
  },
  [SkillId.Docker]: {
    id: SkillId.Docker,
    name: 'Docker',
    level: { type: 'since', year: 2016, month: 6 },
    image: dockerImage,
  },
  [SkillId.Gatsby]: {
    id: SkillId.Gatsby,
    name: 'Gatsby',
    level: { type: 'since', year: 2018, month: 2 },
    image: gatsbyImage,
  },
  [SkillId.Git]: {
    id: SkillId.Git,
    name: 'Git',
    level: { type: 'since', year: 2015, month: 10 },
    image: gitImage,
  },
  [SkillId.JavaScript]: {
    id: SkillId.JavaScript,
    name: 'JavaScript',
    level: { type: 'since', year: 2012 },
    image: javaScriptImage,
  },
  [SkillId.NextJs]: {
    id: SkillId.NextJs,
    name: 'Next.js',
    level: { type: 'since', year: 2017 },
    image: nextJsImage,
  },
  [SkillId.Nuxt]: {
    id: SkillId.Nuxt,
    name: 'Nuxt',
    level: { type: 'since', year: 2020, month: 3 },
    image: nuxtJsImage,
  },
  [SkillId.NodeJs]: {
    id: SkillId.NodeJs,
    name: 'Node.js',
    level: { type: 'since', year: 2016, month: 2 },
    image: nodeJsImage,
  },
  [SkillId.PHP]: {
    id: SkillId.PHP,
    name: 'PHP',
    level: { type: 'since', year: 2015 },
    image: phpImage,
  },
  [SkillId.React]: {
    id: SkillId.React,
    name: 'React',
    level: { type: 'since', year: 2016, month: 11 },
    image: reactImage,
  },
  [SkillId.Rust]: {
    id: SkillId.Rust,
    name: 'Rust',
    level: { type: 'since', year: 2020, month: 6 },
    image: rustImage,
  },
  [SkillId.TypeScript]: {
    id: SkillId.TypeScript,
    name: 'TypeScript',
    level: { type: 'since', year: 2020, month: 2 },
    image: typeScriptImage,
  },
  [SkillId.VueJs]: {
    id: SkillId.VueJs,
    name: 'Vue.js',
    level: { type: 'since', year: 2020, month: 3 },
    image: vueImage,
  },
};

export const skillList: Skill[] = [
  skill[SkillId.Rust],
  skill[SkillId.TypeScript],
  skill[SkillId.JavaScript],
  skill[SkillId.React],
  skill[SkillId.VueJs],
  skill[SkillId.NextJs],
  skill[SkillId.Nuxt],
  skill[SkillId.Gatsby],
  skill[SkillId.NodeJs],
  skill[SkillId.PHP],
  skill[SkillId.Cpp],
  skill[SkillId.Git],
  skill[SkillId.Docker],
];
