import React, { useEffect, useState } from 'react';
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
  bullet,
  advancedBullet,
  intermediateBullet,
  fundamentalBullet,
} = styles;

const Skills = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
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
    <>
      <Headline headline="Computer Skills" subtitle={subtitle} noPadding />
      <Section ref={targetRef} tall>
        <div className={flexWrapper}>
          <div className={progressBars}>
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
          <div className={progressBars}>
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
    </>
  );
};

export default Skills;
