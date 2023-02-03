import styles from './Projects.module.css';
import { ALL_PROJECTS } from '../constants';
import { Project } from './Project';
import { Project as IProject } from '../types';

interface Props {
  projects?: IProject[];
  activeProjectId?: IProject['id'];
}

export function Projects({ projects = ALL_PROJECTS, activeProjectId }: Props) {
  return (
    <div className={styles.projects}>
      <ul className={styles.projects__list}>
        {projects.map((project) => (
          <li className={styles.projects__item} key={project.shortTitle}>
            <Project
              project={project}
              active={project.id === activeProjectId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
