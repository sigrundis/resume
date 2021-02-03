import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import { isBrowser } from '../../utils/helpers';
import { navItems } from '../../data/nav';
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
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  let backgroundImg: HTMLImageElement;
  let portraitImg: HTMLImageElement;
  const [typingAnimation, setTypingAnimation] = useState<boolean>(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const [portraitLoaded, setPortraitLoaded] = useState<boolean>(false);

  /**
   * The Next.js Image component does not forward ref down to the img element (hopefully changes in the future).
   * Therefore we use id to generate the image elements.
   */
  useEffect(() => {
    if (isBrowser) {
      backgroundImg = document.getElementById(
        'heading-background-image'
      ) as HTMLImageElement;
      portraitImg = document.getElementById(
        'heading-portrait-image'
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
    if (contentRef?.current && imageWrapperRef?.current) {
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
          .to(imageWrapperRef.current, animateFromSide, START_ID)
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
        gsap.set(contentNodes, { opacity: 0, y: 200 });
        gsap.set(contentNodes[0], { rotationX: -50 });
        gsap.set(imageWrapperRef.current, { opacity: 0, x: 1000 });
        gsap.set(['#button-wrapper-mobile', '#button-wrapper-desktop'], {
          opacity: 0,
          x: -1000,
        });
      }
    }
  }, [backgroundLoaded, portraitLoaded]);

  const scrollToElementWithId = (id: string) => {
    if (isBrowser) {
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
      <Image
        id="heading-background-image"
        src={'/img/code2.jpg'}
        className={classNames(backgroundImage, {
          [backgroundImageLoaded]: backgroundLoaded,
        })}
        layout="fill"
        alt="Background Image"
      />
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
        <div ref={imageWrapperRef} className={classNames(imageWrapper)}>
          <div className={box}></div>
          <div className={imageInnerWrapper}>
            <Image
              id="heading-portrait-image"
              src={'/img/portrait.jpg'}
              className={image}
              layout="fill"
              alt="Portrait Image"
            />
          </div>
        </div>
        {renderButtons(buttonMobileWrapper, true)}
      </div>
    </div>
  );
};

export default Heading;
