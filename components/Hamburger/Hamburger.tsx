import React, { useState } from 'react';
import classNames from 'classnames';
import ExpandWithAnimation from '../ExpandWithAnimation';
import styles from './Hamburger.module.scss';
const { wrapper, open, top, middle, bottom } = styles;

interface IHamburger {
  onClick: () => any;
  isOpen: boolean;
  children?: any;
}

const Hamburger = ({ isOpen, onClick, children }: IHamburger) => {
  const onToggle = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <div
        role="button"
        onClick={onToggle}
        className={classNames(wrapper, { [open]: isOpen })}
      >
        <span className={top}></span>
        <span className={middle}></span>
        <span className={bottom}></span>
      </div>
      <ExpandWithAnimation isCollapsed={!isOpen}>
        <div>{children}</div>
      </ExpandWithAnimation>
    </>
  );
};

export default Hamburger;
