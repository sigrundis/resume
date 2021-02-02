import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import useIsInViewport from 'use-is-in-viewport';
import gsap from 'gsap';
import IPassion from '../../typescript/Interfaces/IPassion';
import { passionList, passionImages } from '../../data/about';
import Separator from '../Separator';
import Section from '../Section';
import styles from './Career.module.scss';
import IProggressiveImg from '../../typescript/Interfaces/IProgressiveImage';

const {
  flexWrapper,
  item,
  slides,
  imagePile,
  imageWrapper,
  image,
  content: contentStyle,
  title,
  passionTitle,
  paragraph: paragraphStyle,
  arrows,
  arrowWrapper,
  arrowRightWrapper,
  arrowWrapperDisabled,
  arrow,
  arrowLeft,
  arrowRight,
  arrowRightAttention,
  arrowDisabled,
} = styles;

const Career = () => {
  const passionImgRef = useRef<HTMLDivElement>(null);
  const arrowRightRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [isInViewport, content] = useIsInViewport({ threshold: 50 });
  const [animateArrowRight, setAnimateArrowRight] = useState<boolean>(false);
  const [animateInCompleted, setAnimateInCompleted] = useState<boolean>(false);
  const isLeftDisabled = index < 1;
  const isRightDisabled = index + 1 === passionList.length;
  let z = 5;
  const randomRotationAngle = 16 * Math.random() - 8;
  const images = passionImgRef?.current?.childNodes;

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

  useEffect(() => {
    if (!animateInCompleted) {
      if (isInViewport) {
        const arrowTimeline = gsap.timeline({ repeat: 3 });
        const timeline = gsap.timeline({
          onComplete: () => {
            setAnimateInCompleted(true);
            arrowTimeline.fromTo(
              arrowRightRef?.current,
              {
                x: 15,
                duration: 0.7,
                ease: 'Power3.out',
              },
              { x: 0, ease: 'Power3.out' }
            );
          },
        });

        timeline
          .set(images, {
            x: '-500%',
            rotation: () => {
              return 46 * Math.random() - 23;
            },
          })
          .to(images, { opacity: 1, x: 0, stagger: -0.4 })
          .to(images, {
            rotation: () => {
              return 16 * Math.random() - 8;
            },
          });
      } else {
        gsap.set(images, { opacity: 0 });
      }
    }
  }, [isInViewport]);

  const onToggleSlide = (updatedIndex) => {
    const slidingForwards = updatedIndex > index;
    const current = images[index];
    const imageToShow = images[updatedIndex];
    z = Number(gsap.getProperty(current, 'zIndex'));
    let direction = '150%';
    let midAngle = 15;
    if (Math.random() > 0.5) {
      direction = '-150%';
      midAngle = -15;
    }
    const firstSet = { x: 0 };
    const firstTo = {
      x: direction,
      rotation: midAngle,
      rotationY: 90,
      scale: 1.1,
    };
    const secondTo = {
      x: 0,
      y: 0,
      rotation: () => {
        return randomRotationAngle;
      },
      rotationY: 0,
      scale: 1,
    };

    const flipTimeline = gsap.timeline({
      onStart: () => setIndex(updatedIndex),
    });

    // If we are sliding forwards we take the top image and bring it at the bottom of the pile.
    if (slidingForwards) {
      flipTimeline
        .set(current, firstSet)
        .to(current, firstTo)
        .set(current, { zIndex: 1 })
        .to(current, secondTo);
    }
    // If we are moving backwards, we pull the image we want to show and bring it to the top of the pile.
    else {
      flipTimeline
        .set(imageToShow, firstSet)
        .to(imageToShow, firstTo)
        .set(imageToShow, { zIndex: z + 1 })
        .to(imageToShow, secondTo);
    }
  };

  const renderPassionImages = () => {
    return (
      <div ref={passionImgRef} className={imagePile}>
        {passionImages.map((passionImage: IProggressiveImg, idx: number) => {
          z = z - 1;
          return (
            <div
              key={`passionImg-${idx}`}
              className={imageWrapper}
              style={{
                zIndex: z,
              }}
            >
              <Image
                className={image}
                src={passionImage.highQualitySrc}
                layout="fill"
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Section white>
      <div ref={content} className={flexWrapper}>
        <div className={slides}>{renderPassionImages()}</div>
        <div className={contentStyle}>
          <h3 className={title}>My story</h3>
          <Separator />
          <SwipeableViews
            index={index}
            onSwitching={(idx: number) => {
              if (Number.isInteger(idx)) {
                onToggleSlide(idx);
              }
            }}
            enableMouseEvents
            style={{ maxWidth: '80vw' }}
          >
            {passionList.map(({ title, paragraph }: IPassion) => (
              <div className={item} key={title}>
                <h3 className={passionTitle}>{title}</h3>
                <p className={paragraphStyle}>{paragraph}</p>
              </div>
            ))}
          </SwipeableViews>
          <div className={arrows}>
            <div
              className={classNames(arrowWrapper, {
                [arrowWrapperDisabled]: isLeftDisabled,
              })}
              role="button"
              onClick={
                isLeftDisabled ? () => {} : () => onToggleSlide(index - 1)
              }
            >
              <div
                role="button"
                className={classNames(arrow, arrowLeft, {
                  [arrowDisabled]: isLeftDisabled,
                })}
              />
            </div>
            <div
              className={classNames(arrowWrapper, arrowRightWrapper, {
                [arrowWrapperDisabled]: isRightDisabled,
              })}
              role="button"
              onClick={
                isRightDisabled ? () => {} : () => onToggleSlide(index + 1)
              }
            >
              <div
                ref={arrowRightRef}
                className={classNames(arrow, arrowRight, {
                  [arrowRightAttention]: animateArrowRight && !isRightDisabled,
                  [arrowDisabled]: isRightDisabled,
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Career;
