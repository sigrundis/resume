import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import useIsInViewport from 'use-is-in-viewport';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import Separator from '../Separator';
import styles from './Personal.module.scss';

const {
  container,
  textWrapper,
  imageWrapper,
  portraitWrapper,
  portrait,
  backgroundWrapper,
  background,
  paragraph,
  h3,
} = styles;

interface IPersonal {
  startAnimate?: boolean;
}

const Personal = ({ startAnimate }: IPersonal) => {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 });
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const [portraitLoaded, setPortraitLoaded] = useState<boolean>(false);
  let backgroundImg: HTMLImageElement;
  let portraitImg: HTMLImageElement;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      backgroundImg = document.getElementById(
        'personal-background-image'
      ) as HTMLImageElement;
      portraitImg = document.getElementById(
        'personal-portrait-image'
      ) as HTMLImageElement;
    }
  }, []);

  /**
   * In case backgroundImg is stored in cache, onLoad might not trigger.
   * Therefore we use imagesLoaded func to detect when the background image has loaded.
   */
  useEffect(() => {
    if (backgroundImg && !backgroundLoaded) {
      imagesLoaded(backgroundImg, () => {
        setBackgroundLoaded(true);
      });
    }
  }, [backgroundImg]);

  /**
   * In case portraitImg is stored in cache, onLoad might not trigger.
   * Therefore we use imagesLoaded func to detect when the portrait image has loaded.
   */
  useEffect(() => {
    if (portraitImg && !portraitLoaded) {
      imagesLoaded(portraitImg, () => {
        setPortraitLoaded(true);
      });
    }
  }, [portraitImg]);

  useEffect(() => {
    if (!startAnimate) {
      gsap.set(textWrapperRef?.current, { opacity: 0, x: -1000 });
      gsap.set('#image-wrapper', {
        opacity: 0,
        x: 1000,
      });
    } else if (
      startAnimate &&
      isInViewport &&
      backgroundLoaded &&
      backgroundLoaded
    ) {
      const timeline = gsap.timeline();
      const START_ID = 'start-personal-animation';
      timeline
        .to(
          '#image-wrapper',
          {
            opacity: 1,
            duration: 1,
            x: 0,
            ease: 'Power3.inOut',
            transformOrigin: '0 50%',
          },
          START_ID
        )
        .to(
          textWrapperRef?.current,
          {
            opacity: 1,
            duration: 1,
            x: 0,
            ease: 'Power3.inOut',
            transformOrigin: '0 50%',
          },
          START_ID
        );
    }
  }, [startAnimate, isInViewport, backgroundLoaded, portraitLoaded]);

  return (
    <>
      <div ref={targetRef} className={container}>
        <div id="image-wrapper" className={imageWrapper}>
          <div className={backgroundWrapper}>
            <Image
              id="personal-background-image"
              className={background}
              src="/img/white-bridge.jpg"
              layout="fill"
            />
          </div>
          <div className={portraitWrapper}>
            <Image
              id="personal-portrait-image"
              className={portrait}
              src="/img/blue.jpg"
              layout="fill"
            />
          </div>
        </div>
        <div ref={textWrapperRef} className={textWrapper}>
          <h3 className={h3}>On the personal notes</h3>
          <Separator />
          <div>
            <p className={paragraph}>
              My name is Sigrún Dís Hauksdóttir and I am from Reykjavík, the
              capital of Iceland. Currently I am living in Denmark studying for
              my master’s degree at the University of Southern Denmark.
            </p>
            <p className={paragraph}>
              I have really diverse interests. From sitting in a relaxed
              environment doing something creative to attending outdoor
              activities which increases the adrenaline. I am adventurous person
              who loves to travel, practise sports and one of the most fun
              things I do is snowboarding.
            </p>
            <p className={paragraph}>
              As an extrovert person I enjoy social activities and working in a
              team consisting of diverse people. When it comes to planning
              something for social life I am often quick to volunteer because I
              find it really entertaining.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
