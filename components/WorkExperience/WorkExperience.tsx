import React, { useEffect, useState } from 'react';
import useIsInViewport from 'use-is-in-viewport';
import IWorkExperienceItem from '../../typescript/Interfaces/IWorkExperienceItem';
import { workExperienceList } from '../../data/workExperience';
import WorkExperienceItem from '../WorkExperienceItem';
import Section from '../Section';
import Headline from '../Headline';

const WorkExperience = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);

  return (
    <>
      <Headline headline="Work Experience" noPadding white />
      <Section ref={targetRef} tall white>
        {workExperienceList.map((item: IWorkExperienceItem, idx: number) => (
          <WorkExperienceItem
            key={idx}
            item={item}
            animate={animate}
            animateDelay={idx * 0.5}
          />
        ))}
      </Section>
    </>
  );
};

export default WorkExperience;
