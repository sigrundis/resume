import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './TimelineItem.module.scss';

const {
  container,
  rightSide,
  content,
  year: yearStyle,
  dividor,
  animateUp,
  animateFromLeft,
  animateFromRight,
} = styles;
interface ITimelineItemProps {
  children: React.ReactNode;
  year: string;
  animate?: boolean;
  animateDelay?: number;
}

const TimelineItem = ({
  year,
  children,
  animate,
  animateDelay,
}: ITimelineItemProps) => {
  return (
    <div className={container}>
      <div
        className={classNames(yearStyle, { [animateFromLeft]: animate })}
        style={{ animationDelay: `${animateDelay}s` }}
      >
        {year}
      </div>
      <div
        className={classNames(dividor, { [animateUp]: animate })}
        style={{ animationDelay: `${animateDelay}s` }}
      />
      <div
        className={classNames(rightSide, { [animateFromRight]: animate })}
        style={{ animationDelay: `${animateDelay}s` }}
      >
        <div className={content}>{children}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
