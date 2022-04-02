import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { unreachable } from '@/utils';
import { Skill, SkillLevel } from '@/contents/skill';
import Card from '@/components/Card';

export interface Props {
  skill: Skill;
}

const SkillCard: React.VFC<Props> = React.memo(function WorkCard({ skill }) {
  return (
    <StyledCard>
      <Logo>
        <ImageContainer>
          <Image
            src={skill.image}
            alt={skill.name}
            layout="responsive"
            sizes="158px"
          />
        </ImageContainer>
      </Logo>
      <Description>
        <Title>{skill.name}</Title>
        <span>{formatSkillLevel(skill.level)}</span>
      </Description>
    </StyledCard>
  );
});

export default SkillCard;

const StyledCard = styled(Card)`
  width: 100%;
`;

const Logo = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: var(--color-background2);
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Description = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Title = styled.h2`
  margin: 0;
`;

const formatSkillLevel = (level: SkillLevel): string => {
  if (level.type === 'since') {
    if (level.month === undefined) {
      return `${level.year} -`;
    } else {
      return `${level.year}.${level.month.toString().padStart(2, '0')} -`;
    }
  } else if (level.type === 'description') {
    return level.value;
  } else {
    return unreachable(level);
  }
};
