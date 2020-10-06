import React, { Fragment } from 'react';
import Highlight from '../../components/Highlight';
import WebDevelopment from '../../assets/svg/web-development.svg';
import UI from '../../assets/svg/uiux.svg';
import Analytics from '../../assets/svg/reporting.svg';
import Management from '../../assets/svg/process.svg';
import Innovation from '../../assets/svg/idea.svg';
import Team from '../../assets/svg/trust.svg';
import Section from '../Section';
import Headline from '../Headline';
import styles from './Highlights.module.scss';

const { container, heading, icon, highlights } = styles;

const Highlights = () => {
  return (
    <Fragment>
      <Headline white headline={'Highlights'} noPadding />
      <Section white>
        <div className={highlights}>
          <Highlight
            icon={<WebDevelopment className={icon} />}
            title="Web development"
            description="Focusing on front-end development of web applications."
          />
          <Highlight
            icon={<UI className={icon} />}
            title="UI and UX"
            description="Enjoy beautiful design, pay attention to details and set high standards for UI and UX optimisation."
          />
          <Highlight
            icon={<Analytics className={icon} />}
            title="Analytics and reporting"
            description="Make conceus decisions and want to be able to visualize how new features and changes effect the product I am working on."
          />
          <Highlight
            icon={<Management className={icon} />}
            title="Product/project management"
            description="Make informed decisions about project priorities based on the organization's vision, strategy and goals. Organized with a good experience using Scrum."
          />
          <Highlight
            icon={<Innovation className={icon} />}
            title="Entrepreneur and innovation"
            description="Creative and encourage those I work with to express their views so we can optimize ideas together."
          />
          <Highlight
            icon={<Team className={icon} />}
            title="Team player"
            description="A positive atmosphere within a team creates magic."
          />
        </div>
      </Section>
    </Fragment>
  );
};

export default Highlights;
