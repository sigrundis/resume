import React, { useState, useEffect, ReactNode } from 'react';
import classNames from 'classnames';
import useIsInViewport from 'use-is-in-viewport';
import Separator from '../Separator';
import styles from './Headline.module.scss';

const {
  container,
  containerWithAnimation,
  animateHeadline,
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
  animateUp?: boolean;
}

const Headline = ({
  headline,
  subtitle,
  white,
  noPadding,
  animateUp,
}: IHeadlineProps) => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      setAnimate(true);
    }
  }, [isInViewport]);

  return (
    <div
      ref={targetRef}
      className={classNames(container, {
        [containerWithAnimation]: animateUp,
        [animateHeadline]: animate && animateUp,
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
