import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Card from '@/components/Card'
import { unreachable } from '@/utils'

/* eslint-disable @typescript-eslint/promise-function-async */
const Cat0 = dynamic(() => import('./Cat0'))
const Cat1 = dynamic(() => import('./Cat1'))
const Cat2 = dynamic(() => import('./Cat2'))
/* eslint-enable @typescript-eslint/promise-function-async */

export interface Props {
  variant: 0 | 1 | 2
}

const SilhouetteCard: React.FC<Props> = ({ variant }) => {
  return (
    <StyledCard>
      {variant === 0 ? (
        <Cat0 />
      ) : variant === 1 ? (
        <Cat1 />
      ) : variant === 2 ? (
        <Cat2 />
      ) : (
        unreachable(variant)
      )}
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  padding: 25%;
`

export default SilhouetteCard
