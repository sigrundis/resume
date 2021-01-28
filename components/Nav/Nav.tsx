import React, { useState } from 'react';
import classNames from 'classnames';
import INavItem from '../../typescript/Interfaces/INavItem';
import { navItemsList } from '../../data/nav';
import Hamburger from '../Hamburger';
import styles from './Nav.module.scss';
import ExpandWithAnimation from '../ExpandWithAnimation';
const { icon, nav, navMobileOpen, ul, mobileUl, li, selectedLi } = styles;

interface INav {
  selected?: string;
}

const Nav = ({ selected }: INav) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const scrollToElementWithId = (id: string) => {
    setIsMobileNavOpen(false);
    if (typeof window !== 'undefined') {
      const yOffset = -48;
      var el = document?.getElementById(id);
      const y = el?.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const onClickHamburger = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className={classNames(nav, { [navMobileOpen]: isMobileNavOpen })}>
      <Hamburger isOpen={isMobileNavOpen} onClick={onClickHamburger}>
        <ul className={mobileUl}>
          {navItemsList.map((item: INavItem) => (
            <li
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

      <ul className={ul}>
        {navItemsList.map((item: INavItem) => (
          <li
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
