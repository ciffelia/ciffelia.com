import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { unreachable } from '@/utils'
import type { Skill, SkillLevel } from '@/contents/skill/schema'
import Card from '@/components/Card'

export interface Props {
  skill: Skill
}

const SkillCard: React.FC<Props> = React.memo(function WorkCard({ skill }) {
  return (
    <StyledCard>
      <Logo>
        <LogoImage
          src={skill.image}
          alt={`${skill.name} logo`}
          sizes="168px" // max width
        />
      </Logo>
      <Description>
        <Title>{skill.name}</Title>
        <Level>{formatSkillLevel(skill.level)}</Level>
      </Description>
    </StyledCard>
  )
})

export default SkillCard

const StyledCard = styled(Card)`
  width: 100%;
`

const Logo = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 16px;
  background-color: var(--color-background2);
`

const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: contain;
`

const Description = styled.div`
  display: grid;
  gap: 8px;
  justify-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`

const Level = styled.span`
  font-size: 16px;
`

const formatSkillLevel = (level: SkillLevel): string => {
  if (level.type === 'since') {
    if (level.month === undefined) {
      return `${level.year} -`
    } else {
      return `${level.year}.${level.month.toString().padStart(2, '0')} -`
    }
  } else if (level.type === 'description') {
    return level.value
  } else {
    return unreachable(level)
  }
}
