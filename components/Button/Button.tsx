import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
const { button, outlinedButton } = styles;

interface IButton {
  onClick: () => any;
  children: any;
  outlined?: boolean;
  className?: string;
}

const Button = ({ onClick, children, outlined, className }: IButton) => (
  <button
    className={classNames(button, className, { [outlinedButton]: outlined })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
