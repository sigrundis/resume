import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './ImageBanner.module.scss';

const { container, tallContainer, imageWrapper, image, oneImage } = styles;

interface IImageBanner {
  images: string[];
  tall?: boolean;
}

const ImageBanner = ({ images, tall }: IImageBanner) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

  const imageWrappers: NodeListOf<ChildNode> =
    containerRef?.current?.childNodes;
  const imgList: HTMLCollectionOf<HTMLImageElement> =
    containerRef?.current?.getElementsByTagName('img');

  useEffect(() => {
    if (allImagesLoaded) {
      const timeline = gsap.timeline();
      timeline.to(imageWrappers, {
        opacity: 1,
        stagger: 0.6,
        duration: 1,
        ease: 'Power3.out',
      });
    }
  }, [allImagesLoaded]);

  useEffect(() => {
    if (imgList && !allImagesLoaded) {
      imagesLoaded(imgList, () => {
        setAllImagesLoaded(true);
      });
    }
  }, [imgList]);

  return (
    <div
      ref={containerRef}
      className={classNames(container, { [tallContainer]: tall })}
    >
      {images.map((src: string, idx: number) => (
        <div
          key={`image-${idx}`}
          style={{
            width: `${100 / images.length}%`,
          }}
          className={classNames(imageWrapper, {
            [oneImage]: images.length === 1,
          })}
        >
          <Image className={image} src={src} fill alt={`image-banner-${idx}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageBanner;
