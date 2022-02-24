import React from 'react';
import { PageProps } from 'gatsby';
import Head from '../components/Head';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Works from '../components/Works';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <Head />
      <Hero />
      <main>
        <AboutMe />
        <Skills />
        <Works />
      </main>
    </>
  );
};

export default IndexPage;
