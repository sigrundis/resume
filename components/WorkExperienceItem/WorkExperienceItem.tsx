import React, { useState } from 'react';
import classNames from 'classnames';
import IWorkExperienceItem from '../../typescript/Interfaces/IWorkExperienceItem';
import TimelineItem from '../TimelineItem';
import styles from './WorkExperienceItem.module.scss';
import ExpandWithAnimation from '../ExpandWithAnimation';

const {
  contentHeader,
  title: titleStyle,
  company: companyStyle,
  descriptionTrigger,
  arrow,
  arrowOpen,
  descriptionList: descriptionListStyle,
  description: descriptionStyle,
} = styles;

interface IWorkExperienceItemProps {
  item: IWorkExperienceItem;
  animate?: boolean;
  animateDelay?: number;
}

const WorkExperienceItem = ({
  item,
  animate,
  animateDelay,
}: IWorkExperienceItemProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const { year, title, company, descriptionList } = item;

  return (
    <TimelineItem year={year} animate={animate} animateDelay={animateDelay}>
      <>
        <div className={contentHeader}>
          <div className={titleStyle}>{title}</div>
          <div className={companyStyle}>{company}</div>
          {descriptionList && (
            <div
              role="button"
              className={descriptionTrigger}
              onClick={() => setShowDescription(!showDescription)}
            >
              {`${showDescription ? 'Hide' : 'See'} description`}
              <span
                className={classNames(arrow, { [arrowOpen]: showDescription })}
              />
            </div>
          )}
        </div>
        {descriptionList && (
          <ExpandWithAnimation isCollapsed={!showDescription}>
            <ul className={descriptionListStyle}>
              {descriptionList.map((description: string, idx: number) => (
                <li key={idx} className={descriptionStyle}>
                  {description}
                </li>
              ))}
            </ul>
          </ExpandWithAnimation>
        )}
      </>
    </TimelineItem>
  );
};

export default WorkExperienceItem;
