import React from 'react';
import { css } from '@emotion/react';
import { rgba } from 'polished';

export interface Props {
  children: React.ReactNode;
}

const Typography: React.VFC<Props> = (props) => {
  return <div css={style}>{props.children}</div>;
};

export default Typography;

const style = css`
  font-size: 1.07rem;
  line-height: 1.5;

  h1 {
    margin-top: 0;
    width: 100%;
    border: 1px solid #eaecef;
    border-radius: 10px;
    box-shadow: 0 2px 2px ${rgba('black', 0.25)};
    background-color: white;
    font-size: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
  }

  small {
    font-size: 50%;
    opacity: 0.5;
  }
`;
