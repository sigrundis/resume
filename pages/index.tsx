import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { IState } from '../store/store';
import Fonts from '../hooks/Fonts';
import { imageBanner1 } from '../data/imageBanners';
import Head from '../components/Head';
import GoogleAnalytics from '../components/GoogleAnalytics';
import GoogleTagManager from '../components/GoogleTagManager';
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import About from '../components/About';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Expertise from '../components/Expertise';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Resume from '../components/Resume';
import ImageBanner from '../components/ImageBanner';
import Footer from '../components/Footer';

let Index: NextPage = (store) => {
  const state = useSelector<IState, IState>((state: IState) => state);
  const { selectedNav } = state;

  useEffect(() => {
    Fonts();
  }, []);

  return (
    <>
      <Head />
      <GoogleAnalytics />
      <GoogleTagManager />
      <Nav selected={selectedNav} />
      <Heading />
      <Expertise />
      <About />
      <Career />
      <ImageBanner images={imageBanner1} />
      <Skills />
      <Resume />
      <WorkExperience />
      <Education />
      <Footer />
    </>
  );
};

export default Index;
