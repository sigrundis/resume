import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navItems } from '../../data/nav';
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
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState<boolean>(false);
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 });

  useEffect(() => {
    if (isInViewport) {
      setAnimation(true);
      dispatch({ type: SET_SELECTED_NAV, payload: navItems.EXPTERTISE });
    }
  }, [isInViewport]);

  return (
    <div id={navItems.EXPTERTISE}>
      <Headline white headline={'Expertise'} noPadding />
      <Section ref={targetRef} white>
        <div className={expertise}>
          {expertiseList.map((expertise: IExpertiseItem, idx: number) => {
            const { id, title, description } = expertise;
            return (
              <ExpertiseItem
                key={`expertise-${idx}`}
                icon={mapIdToIcon(id)}
                title={title}
                description={description}
                animation={animation}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default Expertise;
