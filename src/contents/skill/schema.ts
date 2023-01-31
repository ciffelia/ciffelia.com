/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod'
import type { StaticImageData } from 'next/image'

export const SkillExperienceSince = z.object({
  type: z.literal('since'),
  year: z.number().min(2000),
  month: z.number().min(1).max(12).optional(),
})

export type SkillExperienceSince = z.infer<typeof SkillExperienceSince>

export const SkillLevelDescription = z.object({
  type: z.literal('description'),
  value: z.string(),
})

export type SkillLevelDescription = z.infer<typeof SkillLevelDescription>

export const SkillLevel = z.union([SkillExperienceSince, SkillLevelDescription])

export type SkillLevel = z.infer<typeof SkillLevel>

export const SkillBase = z.object({
  id: z.string(),
  name: z.string(),
  level: SkillLevel,
})

export type SkillBase = z.infer<typeof SkillBase>

export interface Skill extends SkillBase {
  image: StaticImageData
}

export const SkillRaw = SkillBase.extend({
  image: z.string(),
})

export type SkillRaw = z.infer<typeof SkillRaw>

export const SkillRawList = z.array(SkillRaw)

export type SkillRawList = z.infer<typeof SkillRawList>
