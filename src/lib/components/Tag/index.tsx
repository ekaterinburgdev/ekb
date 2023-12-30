import styled, { css } from 'styled-components';
import { rgba, getContrast } from 'polished';

export interface TagProps {
  color?: string;
}

function getColorStyles({ color = 'black' }: TagProps) {
  const isWhite = getContrast(color, 'white') >= 4.5;
  const bgColor = rgba(color, 0.32);
  const textColor = isWhite ? 'white' : color;
  return css`
    color: ${textColor};
    background-color: ${bgColor};
  `;
}

export const Tag = styled.div<TagProps>`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 64px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  ${getColorStyles}
`;
