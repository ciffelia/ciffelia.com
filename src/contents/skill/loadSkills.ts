import url from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import type { StaticImageData } from 'next/image'
import JSON5 from 'json5'
import { type Skill, type SkillRaw, SkillRawList } from './schema'
import * as assetsIndex from './data/assetsIndex'

const skillsFilePath = path.join(
  url.fileURLToPath(import.meta.url),
  '../data/skills.json5',
)

export const loadSkills = async (): Promise<Skill[]> => {
  const skillsText = await fs.readFile(skillsFilePath, 'utf8')
  const skillsData: unknown = JSON5.parse(skillsText)

  const skillRawList = SkillRawList.parse(skillsData)

  const mapper = async (skillRaw: SkillRaw): Promise<Skill> => {
    const { image, ...rest } = skillRaw
    return {
      image: await loadAssetImage(image),
      ...rest,
    }
  }

  return await Promise.all(skillRawList.map(mapper))
}

const loadAssetImage = async (imageName: string): Promise<StaticImageData> => {
  if (!(imageName in assetsIndex)) {
    throw new Error(`Image ${imageName} not found.`)
  }
  return (assetsIndex as Record<string, StaticImageData>)[imageName]
}
