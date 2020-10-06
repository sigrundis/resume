import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

const {
  container,
  whiteContainer,
  tallContainer,
  noPaddingContainer,
  inner,
} = styles;
interface ISectionProps {
  children: any;
  white?: boolean;
  tall?: boolean;
  noPadding?: boolean;
}

const Section = forwardRef(
  ({ children, white, tall, noPadding }: ISectionProps, ref: any) => {
    return (
      <div
        className={classNames(container, {
          [whiteContainer]: white,
          [tallContainer]: tall,
          [noPaddingContainer]: noPadding,
        })}
        ref={ref}
      >
        <div className={inner}>{children}</div>
      </div>
    );
  }
);

export default Section;
