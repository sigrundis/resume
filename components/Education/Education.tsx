import React, { useEffect, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import IEducationItem from '../../typescript/Interfaces/IEducationItem';
import { educationList } from '../../data/education';
import EducationItem from '../EducationItem';
import Section from '../Section';
import Headline from '../Headline';

const Education = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);

  return (
    <div>
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
