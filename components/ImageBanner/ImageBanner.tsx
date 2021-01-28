import React from 'react';
import classNames from 'classnames';
import styles from './ImageBanner.module.scss';

const { container, tallContainer, image, oneImage } = styles;

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
          className={classNames(image, { [oneImage]: images.length === 1 })}
          style={{
            backgroundImage: `url('${src}')`,
            width: `${100 / images.length}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageBanner;
