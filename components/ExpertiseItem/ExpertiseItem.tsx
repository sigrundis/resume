import React from 'react';
import classNames from 'classnames';
import styles from './ExpertiseItem.module.scss';

const {
  container,
  textWrapper,
  title: titleStyle,
  description: descriptionStyle,
} = styles;

interface IExpertiseProps {
  title: string;
  description: string;
  icon: any;
}

const ExpertiseItem = ({ title, description, icon }: IExpertiseProps) => {
  return (
    <div className={classNames(container)}>
      {icon}
      <div className={textWrapper}>
        <div className={titleStyle}>{title}</div>
        <div className={descriptionStyle}>{description}</div>
      </div>
    </div>
  );
};

export default ExpertiseItem;
