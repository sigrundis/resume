import React from 'react';
import classNames from 'classnames';
import styles from './Separator.module.scss';
const { separator, middle } = styles;

interface ISeparator {
  centered?: boolean;
  className?: string;
}

const Separator = ({ centered, className }: ISeparator) => (
  <div className={classNames(separator, className, { [middle]: centered })} />
);

export default Separator;
