import React, { useRef, useState, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import useIsInViewport from 'use-is-in-viewport';
import gsap from 'gsap';
import Separator from '../Separator';
import styles from './Headline.module.scss';

const {
  container,
  whiteContainer,
  noPaddingContainer,
  h2,
  h3,
  separator,
} = styles;

interface IHeadlineProps {
  headline: string;
  subtitle?: string | ReactNode;
  white?: boolean;
  noPadding?: boolean;
  onAnimateComplete?: () => any;
}

const Headline = ({
  headline,
  subtitle,
  white,
  noPadding,
  onAnimateComplete,
}: IHeadlineProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isInViewport, wrappedTargetRef] = useIsInViewport({
    threshold: 50,
    target: targetRef,
  });
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  useEffect(() => {
    const containerElement = targetRef.current;

    if (containerElement && !animationCompleted) {
      const elementList = containerElement.childNodes;

      if (isInViewport) {
        const timeline = gsap.timeline({
          onComplete: () => {
            if (onAnimateComplete) {
              onAnimateComplete();
            }
            setAnimationCompleted(true);
          },
        });
        timeline.to(elementList, {
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'Power3.inOut',
          transformOrigin: '0 50%',
          rotationX: 0,
          y: 0,
        });
      } else {
        gsap.set(elementList, { opacity: 0, rotationX: -80, y: 50 });
      }
    }
  }, [isInViewport]);

  return (
    <div
      ref={wrappedTargetRef}
      className={classNames(container, {
        [whiteContainer]: white,
        [noPaddingContainer]: noPadding,
      })}
    >
      <h2 className={h2}>{headline}</h2>
      <Separator className={separator} />
      {subtitle && <h3 className={h3}>{subtitle}</h3>}
    </div>
  );
};

export default Headline;
