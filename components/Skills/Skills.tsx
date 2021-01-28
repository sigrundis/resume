import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { navItems } from '../../data/nav';
import { SET_SELECTED_NAV } from '../../store/store';
import useIsInViewport from 'use-is-in-viewport';
import classNames from 'classnames';
import { programmingLanguages, frameworks } from '../../data/computerSkills';
import Section from '../Section';
import ProgressBar from '../ProgressBar';
import Headline from '../Headline';
import styles from './Skills.module.scss';
import IComputerSkill from '../../typescript/Interfaces/IComputerSkill';

const {
  subtitle: subtitleStyle,
  h3,
  flexWrapper,
  progressBars,
  secondProgressBars,
  bullet,
  advancedBullet,
  intermediateBullet,
  fundamentalBullet,
} = styles;

const Skills = () => {
  const dispatch = useDispatch();
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.SKILLS });
    }
  }, [isInViewport]);

  const subtitle = (
    <>
      <div className={subtitleStyle}>
        <div className={classNames(bullet, advancedBullet)} />
        <span>Advanced</span>
      </div>
      <div className={subtitleStyle}>
        <div className={classNames(bullet, intermediateBullet)} />
        <span>Intermetiate</span>
      </div>
      <div className={subtitleStyle}>
        <div className={classNames(bullet, fundamentalBullet)} />
        <span>Fundamental</span>
      </div>
    </>
  );

  return (
    <div id="skills">
      <Headline headline="Computer Skills" subtitle={subtitle} noPadding />
      <Section tall>
        <div className={flexWrapper}>
          <div ref={targetRef} className={progressBars}>
            <h3 className={h3}>Programming Languages</h3>
            {programmingLanguages.map(
              ({ title, percentage }: IComputerSkill, idx: number) => (
                <ProgressBar
                  key={idx}
                  title={title}
                  width={percentage}
                  advanced={percentage > 75}
                  intermediate={percentage <= 75 && percentage > 60}
                  fundamental={percentage <= 60}
                  animate={animate}
                />
              )
            )}
          </div>
          <div className={classNames(progressBars, secondProgressBars)}>
            <h3 className={h3}>Frameworks / Software</h3>
            {frameworks.map(
              ({ title, percentage }: IComputerSkill, idx: number) => (
                <ProgressBar
                  key={idx}
                  title={title}
                  width={percentage}
                  advanced={percentage > 75}
                  intermediate={percentage <= 75 && percentage > 60}
                  fundamental={percentage <= 60}
                  animate={animate}
                />
              )
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
