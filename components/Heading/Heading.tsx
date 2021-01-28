import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import useProgressiveImg from '../../hooks/useProgressiveImg';
import styles from './Heading.module.scss';

const {
  container,
  backgroundImage,
  backgroundImageTiny,
  backgroundImageLoaded,
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
  const [animateWorkTitle, setAnimateWorkTitle] = useState<boolean>(false);
  const { loaded: backgroundLoaded } = useProgressiveImg(
    '/img/code2_tiny.jpg',
    '/img/code2.jpg'
  );
  const { loaded: portraitLoaded } = useProgressiveImg(
    '/img/headerimage_tiny.jpeg',
    '/img/headerimage.jpeg'
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimateWorkTitle(true);
    }, 800);
  }, []);

  return (
    <div className={container}>
      <div
        className={classNames(backgroundImage, {
          [backgroundImageTiny]: !backgroundLoaded,
          [backgroundImageLoaded]: backgroundLoaded,
        })}
      />
      <div className={overlay} />
      <div className={flexWrapper}>
        <div
          className={classNames(content, { [animateContent]: portraitLoaded })}
        >
          <h2 className={h3}>Hi, I'm</h2>
          <h1 className={h1}>Sigrún Dís Hauksdóttir</h1>
          <h2
            className={classNames(h2, {
              [animateWorkTitleStyle]: animateWorkTitle,
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
