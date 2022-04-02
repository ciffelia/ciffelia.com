import styled, { css, Keyframes, keyframes } from 'styled-components';
import { displayedWaveWidth, waveEasingFunc } from './constants';
import { waveMaskUrl } from './waveMask';

export interface Props {
  animation: WaveAnimationParams;
}

export interface WaveAnimationParams {
  from: number;
  to: number;
  duration: `${number}s`;
  delay: `${number}s`;
}

const Wave = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-background1);
  mask-image: url('${waveMaskUrl}');
  mask-size: auto 100%;
  mask-repeat: repeat-x;
  animation: ${({ animation: { from, to, duration, delay } }) =>
    css`
      ${waveKeyframes(from, to)} ${duration} ${waveEasingFunc} ${delay} infinite
    `};

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
`;

export default Wave;

const waveKeyframes = (from: number, to: number): Keyframes => keyframes`
  0% {
    mask-position-x: calc(${displayedWaveWidth} * ${from});
  }

  100% {
    mask-position-x: calc(${displayedWaveWidth} * ${to});
  }
`;
