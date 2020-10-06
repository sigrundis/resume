import React, { useState } from 'react';
import classNames from 'classnames';
import IEducationItem from '../../typescript/Interfaces/IEducationItem';
import ExpandWithAnimation from '../ExpandWithAnimation';
import TimelineItem from '../TimelineItem';
import styles from './EducationItem.module.scss';

const {
  contentHeader,
  subject: subjectStyle,
  school: schoolStyle,
  coursesTrigger,
  arrow,
  arrowOpen,
  courses: coursesStyle,
  course: courseStyle,
} = styles;

interface IEducationItemProps {
  item: IEducationItem;
  animate?: boolean;
  animateDelay?: number;
}

const EducationItem = ({
  item,
  animate,
  animateDelay,
}: IEducationItemProps) => {
  const [showCourses, setShowCourses] = useState<boolean>(false);
  const { year, school, subject, courses } = item;

  return (
    <TimelineItem year={year} animate={animate} animateDelay={animateDelay}>
      <>
        <div className={contentHeader}>
          <div className={subjectStyle}>{subject}</div>
          <div className={schoolStyle}>{school}</div>
          {courses && (
            <div
              role="button"
              className={coursesTrigger}
              onClick={() => setShowCourses(!showCourses)}
            >
              {`${showCourses ? 'Hide' : 'See'} Courses`}
              <span
                className={classNames(arrow, { [arrowOpen]: showCourses })}
              />
            </div>
          )}
        </div>
        {courses && (
          <ExpandWithAnimation isCollapsed={!showCourses}>
            <ul className={coursesStyle}>
              {courses.map((course: string, idx: number) => (
                <li key={idx} className={courseStyle}>
                  {course}
                </li>
              ))}
            </ul>
          </ExpandWithAnimation>
        )}
      </>
    </TimelineItem>
  );
};

export default EducationItem;
