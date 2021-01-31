import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { navItems } from '../../data/nav';
import { SET_SELECTED_NAV } from '../../store/store';
import useIsInViewport from 'use-is-in-viewport';
import classNames from 'classnames';
import { programmingLanguages, frameworks } from '../../data/computerSkills';
import Section from '../Section';
import ProgressBar from '../ProgressBar';
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
  const [isLangInViewport, langRef] = useIsInViewport({ threshold: 30 });
  const [isFrameworksInViewport, frameworksRef] = useIsInViewport({
    threshold: 20,
  });
  const [animateLanguages, setAnimateLanguages] = useState<boolean>(false);
  const [animateFrameworks, setAnimateFrameworks] = useState<boolean>(false);
  const [
    headingAnimationCompleted,
    setHeadingAnimationCompleted,
  ] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.SKILLS });
    }
  }, [isInViewport]);

  useEffect(() => {
    if (isLangInViewport && headingAnimationCompleted) {
      setAnimateLanguages(true);
    }
  }, [isLangInViewport, headingAnimationCompleted]);

  useEffect(() => {
    if (isFrameworksInViewport && headingAnimationCompleted) {
      setAnimateFrameworks(true);
    }
  }, [isFrameworksInViewport, headingAnimationCompleted]);

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
    <Section
      headline="Computer Skills"
      subtitle={subtitle}
      onAnimateComplete={() => setHeadingAnimationCompleted(true)}
      id={navItems.SKILLS}
    >
      <div ref={targetRef} className={flexWrapper}>
        <div ref={langRef} className={progressBars}>
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
                animate={animateLanguages}
              />
            )
          )}
        </div>
        <div
          ref={frameworksRef}
          className={classNames(progressBars, secondProgressBars)}
        >
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
                animate={animateFrameworks}
              />
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
