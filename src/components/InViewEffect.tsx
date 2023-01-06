import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

export type Props = React.ComponentProps<'div'>;

const InViewEffect: React.VFC<Props> = React.memo(function CoverEffect({
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <Container {...props} ref={ref}>
      <ChildrenWrapper play={inView}>{children}</ChildrenWrapper>
      <Cover1 play={inView} />
      <Cover2 play={inView} />
    </Container>
  );
});

export default InViewEffect;

const Container = styled.div`
  position: relative;
`;

const childrenWrapperKeyframes = keyframes`
  0% {
    visibility: hidden;
  }
  
  49% {
    visibility: hidden;
  }
`;

const ChildrenWrapper = styled.div<{ play: boolean }>`
  animation: ${childrenWrapperKeyframes} 1s 0s both
    ${({ play }) => (play ? 'running' : 'paused')};
`;

const coverKeyframes1 = keyframes`
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }

  100% {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const coverKeyframes2 = keyframes`
  0% {
    transform-origin: right;
    transform: scaleX(1);
  }

  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
`;

const Cover = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const Cover1 = styled(Cover)<{ play: boolean }>`
  background-color: var(--color-cover1);
  animation: ${coverKeyframes1} var(--easing-ease-in-expo) 1s 0s backwards
      ${({ play }) => (play ? 'running' : 'paused')},
    ${coverKeyframes2} var(--easing-ease-out-expo) 0.5s 0.5s forwards
      ${({ play }) => (play ? 'running' : 'paused')};
`;

const Cover2 = styled(Cover)<{ play: boolean }>`
  background-color: var(--color-cover2);
  animation: ${coverKeyframes1} var(--easing-ease-in-expo) 0.25s 0.25s backwards
      ${({ play }) => (play ? 'running' : 'paused')},
    ${coverKeyframes2} var(--easing-ease-out-expo) 0.25s 0.5s forwards
      ${({ play }) => (play ? 'running' : 'paused')};
`;