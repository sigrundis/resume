import React, { Fragment } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { IState } from '../store/store';
import { imageBanner1 } from '../data/imageBanners';
import Head from 'next/head';
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
  const pageTitle = 'Sigrún Dís Hauksdóttir - Software Developer';
  const description = 'Online Resume';

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta property="og:url" content="sigrund.is" key="ogurl" />
        <meta
          property="og:image"
          content={'https://sigrund.is/img/share-img.png'}
          key="ogimage"
        />
        <meta property="og:site_name" content={pageTitle} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{pageTitle}</title>
      </Head>
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
      <Education />
      <WorkExperience />
      <Footer />
    </Fragment>
  );
};

export default Index;
