import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import IPassion from '../../typescript/Interfaces/IPassion';
import { passionList, passionImages } from '../../data/about';
import Separator from '../Separator';
import Section from '../Section';
import styles from './Career.module.scss';

const {
  flexWrapper,
  item,
  image,
  rightSide,
  h3,
  passionTitle,
  paragraph: paragraphStyle,
  arrows,
  arrow,
  arrowLeft,
  arrowRight,
  arrowDisabled,
  fadeInAnimation,
} = styles;

const Career = () => {
  const [index, setIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const isLeftDisabled = index < 1;
  const isRightDisabled = index + 1 === passionList.length;

  useEffect(() => {
    setFadeIn(true);
  }, [index]);

  useEffect(() => {
    if (fadeIn) {
      setTimeout(() => {
        setFadeIn(false);
      }, 800);
    }
  }, [fadeIn]);

  return (
    <Section white>
      <div className={flexWrapper}>
        <div
          className={classNames(image, { [fadeInAnimation]: fadeIn })}
          style={{ backgroundImage: `url(${passionImages[index]})` }}
        />
        <div className={rightSide}>
          <h3 className={h3}>My story</h3>
          <Separator />
          <SwipeableViews
            index={index}
            onSwitching={(idx: number) => {
              if (Number.isInteger(idx)) {
                setIndex(idx);
              }
            }}
            enableMouseEvents
          >
            {passionList.map(({ title, paragraph }: IPassion) => (
              <div className={item} key={title}>
                <h3 className={classNames(passionTitle)}>{title}</h3>
                <p className={paragraphStyle}>{paragraph}</p>
              </div>
            ))}
          </SwipeableViews>
          <div className={arrows}>
            <div
              role="button"
              className={classNames(arrow, arrowLeft, {
                [arrowDisabled]: isLeftDisabled,
              })}
              onClick={isLeftDisabled ? () => {} : () => setIndex(index - 1)}
            />
            <div
              role="button"
              className={classNames(arrow, arrowRight, {
                [arrowDisabled]: isRightDisabled,
              })}
              onClick={isRightDisabled ? () => {} : () => setIndex(index + 1)}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Career;
