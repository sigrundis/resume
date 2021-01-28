import React from 'react';
import classNames from 'classnames';
import styles from './ExpertiseItem.module.scss';

const {
  container,
  textWrapper,
  title: titleStyle,
  description: descriptionStyle,
  startAnimation,
} = styles;

interface IExpertiseProps {
  title: string;
  description: string;
  icon: any;
  animation: boolean;
}

const ExpertiseItem = ({
  title,
  description,
  icon,
  animation,
}: IExpertiseProps) => {
  return (
    <div className={classNames(container, { [startAnimation]: animation })}>
      {icon}
      <div className={textWrapper}>
        <div className={titleStyle}>{title}</div>
        <div className={descriptionStyle}>{description}</div>
      </div>
    </div>
  );
};

export default ExpertiseItem;
