import React, { ReactNode } from 'react';
import classNames from 'classnames';
import Separator from '../Separator';
import styles from './Headline.module.scss';

const { container, whiteContainer, noPaddingContainer, h2, h3 } = styles;
interface IHeadlineProps {
  headline: string;
  subtitle?: string | ReactNode;
  white?: boolean;
  noPadding?: boolean;
}

const Headline = ({ headline, subtitle, white, noPadding }: IHeadlineProps) => (
  <div
    className={classNames(container, {
      [whiteContainer]: white,
      [noPaddingContainer]: noPadding,
    })}
  >
    <h2 className={h2}>{headline}</h2>
    <Separator />
    {subtitle && <h3 className={h3}>{subtitle}</h3>}
  </div>
);

export default Headline;
