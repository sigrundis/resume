import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import gsap from 'gsap';
import { navItems } from '../../data/nav';
import useProgressiveImg from '../../hooks/useProgressiveImg';
import Button from '../Button';
import styles from './Heading.module.scss';
import Separator from '../Separator';

const {
  container,
  backgroundImage,
  alternativeBackgroundImage,
  backgroundImageLoaded,
  overlay,
  content,
  contentToAnimateUp,
  animateContent,
  h1,
  h2,
  animateWorkTitle: animateWorkTitleStyle,
  h3,
  buttonMobileWrapper,
  buttonDesktopWrapper,
  button,
  flexWrapper,
  imageWrapper,
  box,
  imageInnerWrapper,
  image,
} = styles;

const Heading = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [typingAnimation, setTypingAnimation] = useState<boolean>(false);
  const tinyBackground = '/img/code2_tiny.jpg';
  const qualityBackground = '/img/code2.jpg';
  const tinyPortrait = '/img/portrait_tiny.jpg';
  const qualityPortrait = '/img/portrait.jpg';
  const { loaded: backgroundLoaded } = useProgressiveImg(
    tinyBackground,
    qualityBackground
  );
  const { loaded: portraitLoaded } = useProgressiveImg(
    tinyPortrait,
    qualityPortrait
  );

  useEffect(() => {
    if (contentRef?.current && imgRef?.current) {
      let contentNodes = contentRef?.current?.children;

      if (backgroundLoaded && portraitLoaded) {
        const btnTimeline = gsap.timeline({ paused: true });
        const timeline = gsap.timeline({
          onComplete: () => {
            setTypingAnimation(true);
            btnTimeline.play();
          },
        });
        const animateFromSide = {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'Power3.inOut',
        };
        const START_ID = 'start';

        timeline
          .to(imgRef.current, animateFromSide, START_ID)
          .to(
            ['#button-wrapper-mobile', '#button-wrapper-desktop'],
            animateFromSide,
            START_ID
          )
          .to(contentNodes, {
            opacity: 1,
            stagger: 0.2,
            duration: 0.6,
            rotationX: 0,
            y: 0,
            ease: 'Power3.inOut',
            transformOrigin: '0 50%',
          });
      } else {
        gsap.set(contentNodes, { opacity: 0, rotationX: -50, y: 200 });
        gsap.set(imgRef.current, { opacity: 0, x: 1000 });
        gsap.set(['#button-wrapper-mobile', '#button-wrapper-desktop'], {
          opacity: 0,
          x: -1000,
        });
      }
    }
  }, [backgroundLoaded, portraitLoaded]);

  const scrollToElementWithId = (id: string) => {
    if (typeof window !== 'undefined') {
      var el = document?.getElementById(id);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderButtons = (className: string, mobile: boolean) => (
    <div
      id={`button-wrapper-${mobile ? 'mobile' : 'desktop'}`}
      className={className}
    >
      <Button
        className={button}
        onClick={() => scrollToElementWithId(navItems.ABOUT)}
      >
        About Me
      </Button>
      <Button
        className={button}
        onClick={() => scrollToElementWithId(navItems.RESUME)}
        outlined
      >
        Resume
      </Button>
    </div>
  );

  return (
    <div className={container}>
      <div className={alternativeBackgroundImage} />
      {backgroundLoaded && (
        <Image
          src={qualityBackground}
          className={classNames(backgroundImage, {
            [backgroundImageLoaded]: backgroundLoaded,
          })}
          layout="fill"
        />
      )}
      <div className={overlay} />
      <div className={flexWrapper}>
        <div
          className={classNames(content, { [animateContent]: portraitLoaded })}
        >
          <div className={contentToAnimateUp} ref={contentRef}>
            <div className={h3}>Hi, I'm</div>
            <h1 className={h1}>Sigrún Dís Hauksdóttir</h1>
            <Separator />
          </div>
          <h2
            className={classNames(h2, {
              [animateWorkTitleStyle]: typingAnimation,
            })}
          >
            Software Developer
          </h2>
          {renderButtons(buttonDesktopWrapper, false)}
        </div>
        <div ref={imgRef} className={classNames(imageWrapper)}>
          <div className={box}></div>
          <div className={imageInnerWrapper}>
            <Image src={qualityPortrait} className={image} layout="fill" />
          </div>
        </div>
        {renderButtons(buttonMobileWrapper, true)}
      </div>
    </div>
  );
};

export default Heading;
