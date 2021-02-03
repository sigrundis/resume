import React, { useState } from 'react';
import classNames from 'classnames';
import INavItem from '../../typescript/Interfaces/INavItem';
import { isBrowser } from '../../utils/helpers';
import { navItemsList } from '../../data/nav';
import Hamburger from '../Hamburger';
import styles from './Nav.module.scss';
const { nav, navMobileOpen, ul, mobileUl, li, selectedLi } = styles;

interface INav {
  selected?: string;
}

const Nav = ({ selected }: INav) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const scrollToElementWithId = (id: string) => {
    setIsMobileNavOpen(false);
    if (isBrowser) {
      var el = document?.getElementById(id);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onClickHamburger = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav
      className={classNames(nav, {
        [navMobileOpen]: isMobileNavOpen,
      })}
    >
      <Hamburger isOpen={isMobileNavOpen} onClick={onClickHamburger}>
        <ul id="mobile-nav-list" className={mobileUl}>
          {navItemsList.map((item: INavItem, idx: number) => (
            <li
              key={`mobile-item-${idx}`}
              role="button"
              className={classNames(li, {
                [selectedLi]: selected === item.id,
              })}
              onClick={() => scrollToElementWithId(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </Hamburger>

      <ul id="desktop-nav-list" className={ul}>
        {navItemsList.map((item: INavItem, idx: number) => (
          <li
            key={`desktop-item-${idx}`}
            role="button"
            className={classNames(li, {
              [selectedLi]: selected === item.id,
            })}
            onClick={() => scrollToElementWithId(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
