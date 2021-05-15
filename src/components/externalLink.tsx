import React from 'react'

interface Props {
  to: string
  children: React.ReactNode
}

export default function ExternalLink(props: Props) {
  return (
    <a href={props.to} target="_blank" rel="noopener">
      {props.children}
    </a>
  )
}
