import React from 'react';
import styles from './Highlight.module.scss';

const {
  container,
  heading,
  icon: iconStyle,
  textWrapper,
  title: titleStyle,
  description: descriptionStyle,
} = styles;

interface IHighlightProps {
  title: string;
  description: string;
  icon: any;
}

const Highlight = ({ title, description, icon }: IHighlightProps) => {
  return (
    <div className={container}>
      <div className={heading}>
        {icon}
        <div className={textWrapper}>
          <div className={titleStyle}>{title}</div>
          <div className={descriptionStyle}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
