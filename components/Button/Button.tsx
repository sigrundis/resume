import React from 'react';
import styles from './Button.module.scss';
const { button } = styles;

interface IButton {
  onClick: any;
  children: any;
}

const Button = ({ onClick, children }: IButton) => (
  <button className={button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
