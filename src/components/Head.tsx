import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon.png'
import appleTouchIcon from '../images/apple-touch-icon.png'

interface Props {
  title?: string
}

export default function Head(props: Props) {
  return (
    <Helmet
      title={props.title}
      titleTemplate="%s - Ciffelia"
      defaultTitle="Ciffelia"
    >
      <html lang="ja" />
      <meta name="description" content="Web開発が好きな大学生です。" />
      <link rel="icon" type="image/png" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
    </Helmet>
  )
}
