import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Section from '../Section';
import styles from './Footer.module.scss';

const { container, top, bottom, link, email, copyright } = styles;

const Footer = () => {
  return (
    <Section dark short>
      <div className={container}>
        <div className={top}>
          <h3>Let's talk</h3>
          <div className={email}>sigrundis@sigrund.is</div>
          <div>Odense</div>
          <div>Denmark</div>
          <div>GMT+1</div>
        </div>
        <div className={bottom}>
          <a className={link} href="/documents/cv.pdf" target="_blank">
            Resume
          </a>
          <a
            className={link}
            href="https://www.linkedin.com/in/sigrundis/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className={link}
            href="https://www.github.com/sigrundis"
            target="_blank"
          >
            Github
          </a>
          <div className={copyright}>© Sigrún Dís Hauksdóttir</div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
