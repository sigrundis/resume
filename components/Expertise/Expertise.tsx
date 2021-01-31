import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { navItems } from '../../data/nav';
import gsap from 'gsap';
import { SET_SELECTED_NAV } from '../../store/store';
import useIsInViewport from 'use-is-in-viewport';
import { expertiseList } from '../../data/expertise';
import ExpertiseItem from '../ExpertiseItem';
import IExpertiseItem from '../../typescript/Interfaces/IExpertiseItem';
import WebDevelopment from '../../assets/svg/web-development.svg';
import UI from '../../assets/svg/uiux.svg';
import Analytics from '../../assets/svg/reporting.svg';
import Management from '../../assets/svg/process.svg';
import Innovation from '../../assets/svg/idea.svg';
import Team from '../../assets/svg/trust.svg';
import Section from '../Section';
import Headline from '../Headline';
import styles from './Expertise.module.scss';

const { icon, expertise } = styles;

const mapIdToIcon = (id: string) => {
  const iconObj: object = {
    web_development: <WebDevelopment className={icon} />,
    ui_ux: <UI className={icon} />,
    analytics: <Analytics className={icon} />,
    management: <Management className={icon} />,
    innovation: <Innovation className={icon} />,
    team_player: <Team className={icon} />,
  };
  return iconObj[id];
};

const Expertise = () => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState<boolean>(false);
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 30 });

  useEffect(() => {
    if (isInViewport) {
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.EXPTERTISE });
    }
  }, [isInViewport]);

  const animateExpertise = () => {
    const expertiseItems = expertiseRef?.current?.childNodes;
    const timeline = gsap.timeline();
    timeline.fromTo(
      expertiseItems,
      { y: 50 },
      {
        opacity: 1,
        stagger: 0.4,
        duration: 1,
        ease: 'Power3.inOut',
        transformOrigin: '0 50%',
        rotationX: 0,
        y: 0,
      }
    );
  };

  return (
    <Section
      ref={targetRef}
      white
      headline={'Expertise'}
      onAnimateComplete={() => animateExpertise()}
      id={navItems.EXPTERTISE}
    >
      <div ref={expertiseRef} className={expertise}>
        {expertiseList.map((expertise: IExpertiseItem, idx: number) => {
          const { id, title, description } = expertise;
          return (
            <ExpertiseItem
              key={`expertise-${idx}`}
              icon={mapIdToIcon(id)}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Expertise;
