import React, { Fragment } from 'react';
import Personal from '../Personal';
import Career from '../Career';
import Headline from '../Headline';
import styles from './About.module.scss';
const { container, headerWrapper, separator, subtitle } = styles;

const About = () => {
  const subtitle = (
    <Fragment>
      <div>
        Hi there! Glad that you are showing interest to get to know me better.
      </div>
      Hopefully it will lead to exiting opportunities that we can work on
      together.
    </Fragment>
  );

  return (
    <Fragment>
      <Headline headline="About me" subtitle={subtitle} noPadding />
      <Personal />
      <Career />
    </Fragment>
  );
};

export default About;
