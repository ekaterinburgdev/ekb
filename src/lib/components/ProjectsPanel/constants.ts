import designIcon from "./assets/icons/design.svg";
import devIconLight from "./assets/icons/dev_light.svg";
import mapIconLight from "./assets/icons/map_light.svg";
import guidesIconLight from "./assets/icons/guides_light.svg";
import transportIconLight from "./assets/icons/transport_light.svg";
import devIconDark from "./assets/icons/dev_dark.svg";
import mapIconDark from "./assets/icons/map_dark.svg";
import guidesIconDark from "./assets/icons/guides_dark.svg";
import transportIconDark from "./assets/icons/transport_dark.svg";

export const CSS_PANEL_BG_KEY = '--projects-panel-bg-color';

export const CSS_PANEL_COLOR_KEY = '--projects-panel-text-color';

export const CSS_PANEL_HOVER = '--projects-panel-hover';

export const CSS_PANEL_FOOTER_HEIGHT = '--projects-panel-footer-height';

export const PROJECT_MAP = {
  id: "map",
  fullTitle: "Карта \n Екатеринбурга",
  shortTitle: "Карта",
  link: "https://map.ekaterinburg.io/",
  logoDark: mapIconDark,
  logoLight: mapIconLight,
};
export const PROJECT_GUIDES = {
  id: "guides",
  fullTitle: "Руководства \n Екатеринбурга",
  shortTitle: "Руководства",
  link: "https://guides.ekaterinburg.io/",
  logoDark: guidesIconDark,
  logoLight: guidesIconLight,
};
export const PROJECT_TRANSPORT = {
  id: "transport",
  fullTitle: "Транспорт \n Екатеринбурга",
  shortTitle: "Транспорт",
  link: "https://transport.ekaterinburg.io/",
  logoDark: transportIconDark,
  logoLight: transportIconLight,
};
export const PROJECT_DESIGN = {
  id: "design",
  fullTitle: "Дизайн-код \n Екатеринбурга",
  shortTitle: "Дизайн-код",
  link: "https://ekaterinburg.design/",
  logoDark: designIcon,
  logoLight: designIcon,
};
export const PROJECT_DEV = {
  id: "dev",
  fullTitle: "ekaterinburg.dev",
  shortTitle: "ekaterinburg.dev",
  link: "https://ekaterinburg.dev/",
  logoDark: devIconDark,
  logoLight: devIconLight,
};

export const ALL_PROJECTS = [
  PROJECT_MAP,
  PROJECT_GUIDES,
  PROJECT_TRANSPORT,
  PROJECT_DESIGN,
  PROJECT_DEV,
];
