import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useIsInViewport from 'use-is-in-viewport';
import { SET_SELECTED_NAV } from '../../store/store';
import IEducationItem from '../../typescript/Interfaces/IEducationItem';
import { educationList } from '../../data/education';
import EducationItem from '../EducationItem';
import Section from '../Section';
import Headline from '../Headline';
import { navItems } from '../../data/nav';

const Education = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      dispatch({ type: SET_SELECTED_NAV, payload: 'education' });
    }
  }, [isInViewport]);

  return (
    <Section
      ref={targetRef}
      tall
      white
      noPaddingBottom
      headline="Education"
      onAnimateComplete={() => setAnimate(true)}
      id={navItems.EDUCATION}
    >
      {educationList.map((item: IEducationItem, idx: number) => (
        <EducationItem
          key={idx}
          item={item}
          animate={animate}
          animateDelay={idx * 0.5}
        />
      ))}
    </Section>
  );
};

export default Education;
