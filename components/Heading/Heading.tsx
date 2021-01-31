import React from 'react';
import classNames from 'classnames';
import useProgressiveImg from '../../hooks/useProgressiveImg';
import styles from './Heading.module.scss';

const {
  container,
  backgroundImage,
  overlay,
  content,
  animateContent,
  h1,
  h2,
  animateWorkTitle: animateWorkTitleStyle,
  h3,
  flexWrapper,
  imageWrapper,
  animateImageWrapper,
  imageLoaded,
  box,
  image,
} = styles;

const Heading = () => {
  const { src, loaded: backgroundLoaded } = useProgressiveImg(
    '/img/code2_tiny.jpg',
    '/img/code2.jpg'
  );
  const { src: portraitSrc, loaded: portraitLoaded } = useProgressiveImg(
    '/img/portrait_tiny.jpg',
    '/img/portrait.jpg'
  );

  return (
    <div className={container}>
      <img src={src} className={backgroundImage} />
      <div className={overlay} />
      <div className={flexWrapper}>
        <div
          className={classNames(content, { [animateContent]: portraitLoaded })}
        >
          <div className={h3}>Hi, I'm</div>
          <h1 className={h1}>Sigrún Dís Hauksdóttir</h1>
          <h2
            className={classNames(h2, {
              [animateWorkTitleStyle]: backgroundLoaded && portraitLoaded,
            })}
          >
            Software Developer
          </h2>
        </div>
        <div
          className={classNames(imageWrapper, {
            [animateImageWrapper]: portraitLoaded,
          })}
        >
          <div className={box}></div>
          <div
            className={classNames(image, { [imageLoaded]: portraitLoaded })}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
