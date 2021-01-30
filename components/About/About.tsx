import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useIsInViewport from 'use-is-in-viewport';
import { navItems } from '../../data/nav';
import { SET_SELECTED_NAV } from '../../store/store';
import Personal from '../Personal';
import Career from '../Career';
import Headline from '../Headline';
import styles from './About.module.scss';

const About = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 });
  const subtitle =
    'Hi there! Glad that you are showing interest to get to know me better.' +
    ' Hopefully it will lead to exiting opportunities that we can work on together.';

  useEffect(() => {
    if (isInViewport) {
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.ABOUT });
    }
  }, [isInViewport]);

  return (
    <div ref={targetRef} id={navItems.ABOUT}>
      <Headline headline="About me" subtitle={subtitle} noPadding animateUp />
      <Personal />
      <Career />
    </div>
  );
};

export default About;
