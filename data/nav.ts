import INavItem from '../typescript/Interfaces/INavItem';

export const navItems = {
  EXPTERTISE: 'expertise',
  ABOUT: 'about',
  SKILLS: 'skills',
  EDUCATION: 'education',
  WORK_EXPERIENCE: 'work_experience',
};

export const navItemsList: INavItem[] = [
  {
    id: navItems.EXPTERTISE,
    title: 'Expertise',
  },
  {
    id: navItems.ABOUT,
    title: 'About Me',
  },
  {
    id: navItems.SKILLS,
    title: 'Skills',
  },
  {
    id: navItems.EDUCATION,
    title: 'Education',
  },
  {
    id: navItems.WORK_EXPERIENCE,
    title: 'Work Experience',
  },
];
