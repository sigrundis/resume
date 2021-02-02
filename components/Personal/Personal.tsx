import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import useIsInViewport from 'use-is-in-viewport';
import gsap from 'gsap';
import Separator from '../Separator';
import styles from './Personal.module.scss';

const {
  container,
  textWrapper,
  imageWrapper,
  portraitWrapper,
  portrait,
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

  useEffect(() => {
    const textItems = textWrapperRef?.current?.childNodes;

    if (!startAnimate) {
      gsap.set(textItems, { opacity: 0, y: 50 });
    } else if (startAnimate && isInViewport) {
      const timeline = gsap.timeline();
      timeline.to(textItems, {
        opacity: 1,
        stagger: 0.4,
        duration: 1,
        y: 0,
        ease: 'Power3.inOut',
        transformOrigin: '0 50%',
      });
    }
  }, [startAnimate, isInViewport]);

  return (
    <>
      <div ref={targetRef} className={container}>
        <div className={imageWrapper}>
          <div className={background}></div>
          <div className={portraitWrapper}>
            <Image className={portrait} src="/img/blue.jpg" layout="fill" />
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
