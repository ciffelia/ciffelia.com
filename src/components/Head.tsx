import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '@/images/favicon.png';
import appleTouchIcon from '@/images/apple-touch-icon.png';

const Head: React.VFC = () => {
  return (
    <Helmet>
      <html lang="ja" prefix="og: https://ogp.me/ns#" />
      <link rel="icon" type="image/png" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <meta name="description" content="About me" />
      <meta property="og:title" content="Ciffelia" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ciffelia.com/" />
      <meta property="og:image" content="https://ciffelia.com/ogp.png" />
      <meta property="og:description" content="About me" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="Ciffelia" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ciffelia" />
      <title>Ciffelia</title>
    </Helmet>
  );
};

export default Head;
