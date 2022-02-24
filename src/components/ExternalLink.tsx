import React from 'react'

interface Props {
  to: string
  children: React.ReactNode
}

const ExternalLink: React.VFC<Props> = (props) => {
  return (
    <a href={props.to} target="_blank" rel="noopener">
      {props.children}
    </a>
  )
}

export default ExternalLink
