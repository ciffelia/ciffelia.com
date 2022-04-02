import React from 'react';
import styled from 'styled-components';
import { SPACING } from '@charcoal-ui/foundation';
import createTheme from '@charcoal-ui/styled';
import Image from 'next/image';
import { unreachable } from '@/utils';
import { Skill, SkillLevel } from '@/contents/skill';
import Card from '@/components/Card';

const theme = createTheme(styled);

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
        <Level>{formatSkillLevel(skill.level)}</Level>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background2);

  ${theme((o) => o.padding.all(16))}
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Description = styled.div`
  display: grid;
  justify-items: center;
  gap: ${SPACING['8']}px;

  ${theme((o) => o.padding.vertical(16))}
`;

const Title = styled.h2`
  margin: 0;

  ${theme((o) => o.typography(20).bold)}
`;

const Level = styled.span`
  ${theme((o) => o.typography(16))}
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
