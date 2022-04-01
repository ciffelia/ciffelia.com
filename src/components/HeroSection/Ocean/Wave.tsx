import styled, { css, Keyframes, keyframes } from 'styled-components';
import { displayedWaveWidth, waveEasingFunc } from './constants';
import waveSvg from '@/images/wave.svg';

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
  background-image: url('${waveSvg}');
  background-size: auto 100%;
  background-repeat: repeat-x;
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
    background-position-x: calc(${displayedWaveWidth} * ${from});
  }

  100% {
    background-position-x: calc(${displayedWaveWidth} * ${to});
  }
`;
