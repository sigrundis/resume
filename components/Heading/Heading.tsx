import React from 'react';
import styles from './Heading.module.scss';

const {
  container,
  backgroundImage,
  overlay,
  content,
  h1,
  h2,
  h3,
  flexWrapper,
  imageWrapper,
  box,
  image,
} = styles;

const Heading = () => {
  return (
    <div className={container}>
      <div className={backgroundImage}></div>
      <div className={overlay} />
      <div className={flexWrapper}>
        <div className={content}>
          <h2 className={h3}>I'm</h2>
          <h1 className={h1}>Sigrún Dís Hauksdóttir</h1>
          <h2 className={h2}>Software Developer</h2>
        </div>
        <div className={imageWrapper}>
          <div className={box}></div>
          <div className={image}></div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
