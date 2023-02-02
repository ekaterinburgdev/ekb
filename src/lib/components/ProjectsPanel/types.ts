export interface Theme {
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
  width?: string;
}
