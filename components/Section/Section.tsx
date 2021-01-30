import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

const {
  container,
  whiteContainer,
  darkContainer,
  tallContainer,
  noPaddingContainer,
  noPaddingBottomContainer,
  inner,
} = styles;
interface ISectionProps {
  id?: string;
  children: any;
  white?: boolean;
  dark?: boolean;
  tall?: boolean;
  noPadding?: boolean;
  noPaddingBottom?: boolean;
}

const Section = forwardRef(
  (
    {
      id,
      children,
      white,
      dark,
      tall,
      noPadding,
      noPaddingBottom,
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
          [noPaddingContainer]: noPadding,
          [noPaddingBottomContainer]: noPaddingBottom,
        })}
        ref={ref}
      >
        <div className={inner}>{children}</div>
      </div>
    );
  }
);

export default Section;
