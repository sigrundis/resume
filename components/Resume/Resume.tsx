import React from 'react';
import { navItems } from '../../data/nav';
import styles from './Resume.module.scss';

const { container, overlay, link } = styles;

const Resume = () => {
  return (
    <div id={navItems.RESUME} className={container}>
      <div className={overlay} />
      <a className={link} href="/documents/cv.pdf" target="_blank">
        Download CV
      </a>
    </div>
  );
};

export default Resume;
