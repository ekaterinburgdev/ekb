import styled, { css } from 'styled-components';

export interface DividerProps {
  verticalGap?: 0 | 8 | 16;
}

export const Divider = styled.div<DividerProps>`
  margin: ${({ verticalGap = 16 }) => css`
    ${verticalGap}px 0
  `};
  border: 1px solid #3c4669;
`;
