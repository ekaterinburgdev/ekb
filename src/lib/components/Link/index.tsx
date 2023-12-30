import { rgba } from 'polished';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum LinkSize {
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface LinkProps {
  size?: LinkSize;
  onClick?: (e: React.MouseEvent<HTMLLinkElement>) => void;
  children?: ReactNode;
}

function getSizeStyles({ size = LinkSize.MEDIUM }: LinkProps) {
  switch (size) {
    case LinkSize.SMALL:
      return css`
        font-size: 14px;
        line-height: 18px;
      `;
    case LinkSize.MEDIUM:
    default:
      return css`
        font-size: 16px;
        line-height: 20px;
      `;
  }
}

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})<LinkProps>`
  cursor: pointer;
  transition: all 0.15s ease;
  appearance: none;
  display: inline;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  border-bottom: 1px solid ${rgba('#9baac3', 0.32)};
  color: #9baac3;
  &:hover {
    color: #fff;
  }
  &:active {
    color: #fff;
    border-bottom-color: #fff;
  }

  ${getSizeStyles}
`;
