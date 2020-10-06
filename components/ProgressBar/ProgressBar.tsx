import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import useIsInViewport from 'use-is-in-viewport';
import styles from './ProgressBar.module.scss';

const {
  container,
  label,
  progressContainer,
  progress,
  advancedProgress,
  intermediateProgress,
  fundamentalProgress,
} = styles;

interface IProgressBar {
  title: string;
  width: number;
  animate?: boolean;
  animateDelay?: boolean;
  advanced?: boolean;
  intermediate?: boolean;
  fundamental?: boolean;
}

const ProgressBar = ({
  title,
  width: finalWidth,
  animate,
  advanced,
  intermediate,
  fundamental,
}: IProgressBar) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      setWidth(finalWidth);
    } else {
      setWidth(0);
    }
  }, [animate]);

  return (
    <div className={container}>
      <div className={label}>{title}</div>
      <div className={progressContainer}>
        <div
          className={classNames(progress, {
            [advancedProgress]: advanced,
            [intermediateProgress]: intermediate,
            [fundamentalProgress]: fundamental,
          })}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
