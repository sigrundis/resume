import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import styles from './ImageBanner.module.scss';

const { container, tallContainer, imageWrapper, image, oneImage } = styles;

interface IImageBanner {
  images: string[];
  tall?: boolean;
}

const ImageBanner = ({ images, tall }: IImageBanner) => {
  return (
    <div className={classNames(container, { [tallContainer]: tall })}>
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
          <Image className={image} src={src} layout="fill" />
        </div>
      ))}
    </div>
  );
};

export default ImageBanner;
