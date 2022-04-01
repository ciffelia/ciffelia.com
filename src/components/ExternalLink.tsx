import React from 'react';

export interface Props {
  to: string;
  children: React.ReactNode;
}

const ExternalLink: React.VFC<Props> = React.memo(function ExternalLink(props) {
  return (
    <a href={props.to} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
});

export default ExternalLink;
