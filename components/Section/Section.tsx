import React, { forwardRef, ReactElement } from 'react';
import classNames from 'classnames';
import Headline from '../../components/Headline';
import styles from './Section.module.scss';

const {
  container,
  whiteContainer,
  darkContainer,
  tallContainer,
  shortContainer,
  noPaddingBottomContainer,
  inner,
} = styles;

interface ISectionProps {
  headline?: string;
  subtitle?: string | ReactElement;
  id?: string;
  children: any;
  white?: boolean;
  dark?: boolean;
  tall?: boolean;
  short?: boolean;
  noHeadlinePadding?: boolean;
  noPaddingBottom?: boolean;
  onAnimateComplete?: () => any;
}

const Section = forwardRef(
  (
    {
      id,
      headline,
      subtitle,
      children,
      white,
      dark,
      tall,
      short,
      noHeadlinePadding,
      noPaddingBottom,
      onAnimateComplete,
    }: ISectionProps,
    ref: any
  ) => {
    return (
      <div
        id={id}
        className={classNames(container, {
          [whiteContainer]: white,
          [darkContainer]: dark,
          [tallContainer]: tall,
          [shortContainer]: short,
          [noPaddingBottomContainer]: noPaddingBottom,
        })}
        ref={ref}
      >
        {headline && (
          <Headline
            white={white}
            headline={headline}
            subtitle={subtitle}
            noPadding={noHeadlinePadding}
            onAnimateComplete={onAnimateComplete}
          />
        )}
        <div className={inner}>{children}</div>
      </div>
    );
  }
);

export default Section;
