import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  ReactElement,
} from 'react';
import styles from './ExpandWithAnimation.module.scss';

const { container } = styles;
interface IExpandWithAnimationProps {
  children: ReactElement;
  isCollapsed?: boolean;
}

const ExpandWithAnimation = ({
  children,
  isCollapsed,
}: IExpandWithAnimationProps) => {
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCollapsed) {
      collapseSection();
    }
  }, []);

  /**
   * If the content changes we want to make sure the height is correct.
   */
  useEffect(() => {
    if (isCollapsed) {
      collapseSection();
    } else {
      expandSection();
    }
  });

  /**
   * Called when componend is collapsed.
   * Updates the height to 0.
   */
  const collapseSection = () => {
    if (content.current) {
      content.current.style.height = 0 + 'px';
    }
  };

  /**
   * Called when componend is expanded.
   * Updates the height to fit its content.
   */
  const expandSection = () => {
    if (content.current) {
      const sectionHeight = content.current.scrollHeight;
      content.current.style.height = sectionHeight + 'px';
    }
  };

  return (
    <div ref={content} className={container}>
      {children}
    </div>
  );
};

export default ExpandWithAnimation;
