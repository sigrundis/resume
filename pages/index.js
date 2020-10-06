import React, { Fragment } from 'react';
import { imageBanner1, imageBanner2 } from '../data/imageBanners';
import Heading from '../components/Heading';
import About from '../components/About';
import Skills from '../components/Skills';
import Highlights from '../components/Highlights';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import ImageBanner from '../components/ImageBanner';

const index = () => (
  <Fragment>
    <Heading />
    <Highlights />
    <About />
    <ImageBanner images={imageBanner1} />
    <Skills />
    <ImageBanner images={imageBanner2} />
    <Education />
    <WorkExperience />
  </Fragment>
);

export default index;
