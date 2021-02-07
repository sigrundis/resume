import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useIsInViewport from 'use-is-in-viewport';
import { navItems } from '../../data/nav';
import { SET_SELECTED_NAV } from '../../store/store';
import Personal from '../Personal';
import Career from '../Career';
import Section from '../Section';
import styles from './About.module.scss';

const About = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 40 });
  const [animate, setAnimate] = useState<boolean>(false);
  const subtitle =
    'Hi there! Glad that you are showing interest to get to know me better.' +
    ' Hopefully it will lead to exciting opportunities that we can work on together.';

  useEffect(() => {
    if (isInViewport) {
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.ABOUT });
    }
  }, [isInViewport]);

  return (
    <Section
      ref={targetRef}
      id={navItems.ABOUT}
      headline="About me"
      subtitle={subtitle}
      onAnimateComplete={() => {
        setAnimate(true);
      }}
    >
      <Personal startAnimate={animate} />
    </Section>
  );
};

export default About;
