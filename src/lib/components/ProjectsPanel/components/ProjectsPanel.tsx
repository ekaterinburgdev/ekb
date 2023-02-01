import styles from './Toggle.module.css';
import classNames from 'classnames';
import {
  ALL_PROJECTS,
  CSS_PANEL_BG_KEY,
  CSS_PANEL_COLOR_KEY,
  CSS_PANEL_FOOTER_HEIGHT,
  CSS_PANEL_HOVER,
  PROJECT_MAP,
} from '../constants';
import { Styles, Project, Theme, ToggleStyles } from '../types';
import { Projects } from './Projects';
import { Modal, useModal } from './Modal';
import { AnimatedLogo } from '../../AnimatedLogo';

const defaultTheme = {
  background: 'black',
  color: 'white',
};

const defaultStyle = {
  bottom: '16px',
  left: '16px',
  zIndex: 1000,
};

export interface Props {
  activeProjectId?: Project['id'];
  projects?: Project[];
  theme?: Theme;
  isDarkIcons?: boolean;
  style?: Styles;
  toggleStyle?: ToggleStyles;
}

export function ProjectsPanel({
  theme = defaultTheme,
  projects = ALL_PROJECTS,
  activeProjectId = PROJECT_MAP.id,
  isDarkIcons = false,
  style,
  toggleStyle,
}: Props) {
  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  const { toggle, close, isOpen } = useModal();

  const cssVars = {
    [CSS_PANEL_BG_KEY]: theme.background,
    [CSS_PANEL_COLOR_KEY]: theme.color,
    [CSS_PANEL_HOVER]: '155, 170, 190',
    [CSS_PANEL_FOOTER_HEIGHT]: '80px',
  } as React.CSSProperties;

  if (!activeProject) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      toggle={toggle}
      style={{ ...cssVars, ...defaultStyle, ...style }}
      handler={
        <div className={styles.toggle}>
          <button
            type="button"
            className={classNames(styles.toggle__control, {
              [styles.toggle__control_active]: isOpen,
            })}
            onClick={toggle}
          >
            <AnimatedLogo radius="60px" />
          </button>
          <a
            href={activeProject.link}
            className={classNames(
              styles.toggle__activeproject,
              styles.activeproject
            )}
            style={toggleStyle}
          >
            <img
              src={
                isDarkIcons ? activeProject.logoDark : activeProject.logoLight
              }
              className={styles.activeproject__logo}
              alt={activeProject.fullTitle}
            />
            <div className={styles.activeproject__title}>
              {activeProject.fullTitle}
            </div>
          </a>
        </div>
      }
      link={<a href="https://ekaterinburg.io/">Все проекты</a>}
    >
      <Projects projects={projects} isDarkIcons={isDarkIcons} />
    </Modal>
  );
}
