import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useIsInViewport from 'use-is-in-viewport';
import { SET_SELECTED_NAV } from '../../store/store';
import IEducationItem from '../../typescript/Interfaces/IEducationItem';
import { educationList } from '../../data/education';
import EducationItem from '../EducationItem';
import Section from '../Section';
import Headline from '../Headline';

const Education = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
      dispatch({ type: SET_SELECTED_NAV, payload: 'education' });
    }
  }, [isInViewport]);

  return (
    <div id="education">
      <Headline headline="Education" white noPadding />
      <Section ref={targetRef} tall white noPadding>
        {educationList.map((item: IEducationItem, idx: number) => (
          <EducationItem
            key={idx}
            item={item}
            animate={animate}
            animateDelay={idx * 0.5}
          />
        ))}
      </Section>
    </div>
  );
};

export default Education;
