export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemeStyles {
  background: string;
  color: string;
}

export interface Project {
  id: string;
  fullTitle: string;
  shortTitle: string;
  link: string;
  logo: string;
  active?: boolean;
}

export interface Styles {
  zIndex?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface ToggleStyles {
  paddingRight?: string;
  backgroundColor?: string;
  width?: string;
}
