import styles from "./Project.module.css";
import { Project as IProject } from "../types";

interface Props {
  project: IProject;
  isDarkIcons?: boolean;
}

export function Project({ project, isDarkIcons }: Props): JSX.Element {
  return (
    <a href={project.link} className={styles.project} key={project.shortTitle}>
      <img
        src={isDarkIcons ? project.logoDark : project.logoLight}
        className={styles.project__logo}
        alt={project.shortTitle}
      />
      <div className={styles.project__title}>{project.shortTitle}</div>
    </a>
  );
}
