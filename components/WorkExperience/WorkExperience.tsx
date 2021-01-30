import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import useIsInViewport from 'use-is-in-viewport';
import { navItems } from '../../data/nav';
import { SET_SELECTED_NAV } from '../../store/store';
import IWorkExperienceItem from '../../typescript/Interfaces/IWorkExperienceItem';
import { workExperienceList } from '../../data/workExperience';
import Button from '../Button';
import WorkExperienceItem from '../WorkExperienceItem';
import Section from '../Section';
import Headline from '../Headline';
import styles from './WorkExperience.module.scss';

const { items, extraItems, visible, fadeOut, hidden: hiddenStyle } = styles;

const WorkExperience = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.WORK_EXPERIENCE });
    }
  }, [isInViewport]);

  useEffect(() => {
    if (showAll) {
      setHidden(false);
    }
    if (!showAll) {
      setTimeout(() => {
        setHidden(true);
      }, 800);
    }
  }, [showAll]);

  return (
    <div id={navItems.WORK_EXPERIENCE}>
      <Headline headline="Work Experience" noPadding white />
      <Section ref={targetRef} tall white>
        <div className={items}>
          {workExperienceList
            .slice(0, 3)
            .map((item: IWorkExperienceItem, idx: number) => (
              <WorkExperienceItem
                key={idx}
                item={item}
                animate={animate}
                animateDelay={idx * 0.5}
              />
            ))}

          <div
            className={classNames(extraItems, {
              [visible]: showAll,
              [fadeOut]: !showAll,
              [hiddenStyle]: hidden,
            })}
          >
            {workExperienceList
              .slice(3, -1)
              .map((item: IWorkExperienceItem, idx: number) => (
                <WorkExperienceItem
                  key={idx}
                  item={item}
                  animate={animate}
                  animateDelay={idx * 0.5}
                />
              ))}
          </div>
        </div>
        <Button onClick={() => setShowAll(showAll ? false : true)}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </Section>
    </div>
  );
};

export default WorkExperience;
