import React from 'react';
import Image from 'next/image';
import { navItems } from '../../data/nav';
import styles from './Resume.module.scss';

const { container, image, overlay, link } = styles;

const Resume = () => {
  return (
    <div id={navItems.RESUME} className={container}>
      <Image className={image} src="/img/speak.jpeg" layout="fill" />
      <div className={overlay} />
      <a className={link} href="/documents/cv.pdf" target="_blank">
        Download CV
      </a>
    </div>
  );
};

export default Resume;
