import styles from './Project.module.css';
import { Project as IProject } from '../types';
import classNames from 'classnames';

interface Props {
  project: IProject;
  active?: boolean;
}

export function Project({ project, active }: Props): JSX.Element {
  return (
    <a
      tabIndex={active ? -1 : undefined}
      href={project.link}
      className={classNames(styles.project, {
        [styles.project_active]: active,
      })}
      key={project.shortTitle}
    >
      <img
        src={project.logo}
        className={styles.project__logo}
        alt={project.shortTitle}
      />
      <div className={styles.project__title}>{project.shortTitle}</div>
    </a>
  );
}
