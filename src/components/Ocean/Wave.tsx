import React from 'react';
import { css, Keyframes, keyframes, SerializedStyles } from '@emotion/react';
import { displayedWaveWidth, waveEasingFunc } from './constants';
import waveSvg from '../../images/wave.svg';

export interface Props {
  animation: WaveAnimationParams;
}

export interface WaveAnimationParams {
  from: number;
  to: number;
  duration: `${number}s`;
  delay: `${number}s`;
}

const Wave: React.VFC<Props> = ({ animation }: Props) => (
  <div css={waveStyle(animation)} />
);

export default Wave;

const waveStyle = ({
  from,
  to,
  duration,
  delay,
}: WaveAnimationParams): SerializedStyles => css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('${waveSvg}');
  background-size: auto 100%;
  background-repeat: repeat-x;
  animation: ${waveKeyframes(from, to)} ${duration} ${waveEasingFunc} ${delay}
    infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
`;

const waveKeyframes = (from: number, to: number): Keyframes => keyframes`
  0% {
    background-position-x: calc(${displayedWaveWidth} * ${from});
  }
  100% {
    background-position-x: calc(${displayedWaveWidth} * ${to});
  }
`;
