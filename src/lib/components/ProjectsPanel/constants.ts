import designIcon from './assets/icons/design.svg';
import devIcon from './assets/icons/dev.svg';
import mapIcon from './assets/icons/map.svg';
import guidesIcon from './assets/icons/guides.svg';
import transportIcon from './assets/icons/transport.svg';

export const PROJECT_MAP = {
  id: 'map',
  fullTitle: 'Карта \n Екатеринбурга',
  shortTitle: 'Карта',
  link: 'https://map.ekaterinburg.io/',
  logo: mapIcon,
};
export const PROJECT_GUIDES = {
  id: 'guides',
  fullTitle: 'Руководства \n Екатеринбурга',
  shortTitle: 'Руководства',
  link: 'https://guides.ekaterinburg.io/',
  logo: guidesIcon,
};
export const PROJECT_TRANSPORT = {
  id: 'transport',
  fullTitle: 'Транспорт \n Екатеринбурга',
  shortTitle: 'Транспорт',
  link: 'https://transport.ekaterinburg.io/',
  logo: transportIcon,
};
export const PROJECT_DESIGN = {
  id: 'design',
  fullTitle: 'Дизайн-код \n Екатеринбурга',
  shortTitle: 'Дизайн-код',
  link: 'https://ekaterinburg.design/',
  logo: designIcon,
};
export const PROJECT_DEV = {
  id: 'dev',
  fullTitle: 'Код \n Екатеринбурга',
  shortTitle: 'ekaterinburg.dev',
  link: 'https://ekaterinburg.dev/',
  logo: devIcon,
};

export const ALPHA_PROJECTS = [PROJECT_MAP, PROJECT_GUIDES, PROJECT_TRANSPORT];

export const PRODUCTION_PROJECTS = [PROJECT_DESIGN, PROJECT_DEV];

export const ALL_PROJECTS = [...ALPHA_PROJECTS, ...PRODUCTION_PROJECTS];
