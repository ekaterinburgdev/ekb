import styles from './Toggle.module.css';
import classNames from 'classnames';
import { ALL_PROJECTS, PROJECT_MAP } from '../constants';
import { Styles, Project, Theme, ToggleStyles } from '../types';
import { Projects } from './Projects';
import { ReactComponent as Dots } from '../assets/icons/dots.svg';
import { Modal, useModal } from './Modal';
import { AnimatedLogo } from '../../AnimatedLogo';

const defaultTheme = {
  background: 'black',
  toggleBackground: 'black',
  color: 'white',
};

const defaultStyle = {
  zIndex: 1000,
};

export interface Props {
  activeProjectId?: Project['id'];
  projects?: Project[];
  theme?: Theme;
  style?: Styles;
  toggleStyle?: ToggleStyles;
}

export function ProjectsPanel({
  theme = defaultTheme,
  projects = ALL_PROJECTS,
  activeProjectId = PROJECT_MAP.id,
  style,
  toggleStyle,
}: Props) {
  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  const { toggle, close, isOpen } = useModal();

  const cssVars = {
    '--projects-panel-toggle-bg-color':
      theme.toggleBackground || theme.background,
    '--projects-panel-bg-color': theme.background,
    '--projects-panel-text-color': theme.color,
    '--projects-panel-transition': '0.2s',
    '--projects-panel-hover': '155, 170, 190',
    '--projects-panel-footer-height': '80px',
    '--projects-focus-color': '#FFD400',
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
        <div
          className={classNames(styles.toggle, {
            [styles.toggle_active]: isOpen,
          })}
        >
          <button
            type="button"
            aria-label={
              isOpen ? 'Закрыть панель "Сервисы"' : 'Открыть панель "Сервисы"'
            }
            className={classNames(styles.toggle__control, {
              [styles.toggle__control_active]: isOpen,
            })}
            onClick={toggle}
          >
            <AnimatedLogo
              color={isOpen ? theme.background : theme.color}
              active={isOpen}
              radius="60px"
            />
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
              src={activeProject.logo}
              className={styles.activeproject__logo}
              aria-hidden="true"
            />
            <div className={styles.activeproject__title}>
              {activeProject.fullTitle}
            </div>
          </a>
        </div>
      }
      link={
        <a className={styles.allprojects} href="https://ekaterinburg.io/">
          <Dots />
          <span className={styles.allprojects__text}>Все сервисы</span>
        </a>
      }
    >
      <Projects projects={projects} activeProjectId={activeProjectId} />
    </Modal>
  );
}
