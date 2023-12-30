import { Children, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useFocusRing, VisuallyHidden } from 'react-aria';
import { ICheckboxState } from '../../types/ICheckboxState';

export interface CheckboxProps extends ICheckboxState {
  children?: ReactNode;
  isIndeterminate?: boolean;
  defaultColor?: string;
  activeColor?: string;
}

const CheckStroke = styled.rect``;
const CheckFill = styled.rect``;
const CheckMark = styled.path``;

const Label = styled.label<{ $hasChildren?: boolean }>`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  ${({ $hasChildren }) =>
    $hasChildren &&
    css`
      svg {
        margin-right: 8px;
      }
    `}

  svg,
  rect,
  path {
    transition: transform 0.2s;
  }

  /* Remove hover effect on touch screen */
  @media (hover: hover) {
    &:hover svg {
      transform: scale(1.2);
    }
  }
`;

// 00B400
export function Checkbox({
  defaultColor = '#3C4669',
  activeColor = '#3C4669',
  toggle,
  ...props
}: CheckboxProps) {
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = props.isSelected && !props.isIndeterminate;
  const color = isSelected ? activeColor : defaultColor;
  const boxStyles = {
    x: 1,
    y: 1,
    width: 18,
    height: 18,
    rx: 4,
  };

  return (
    <Label $hasChildren={Boolean(Children.count(props.children))}>
      <VisuallyHidden>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={toggle}
          {...focusProps}
        />
      </VisuallyHidden>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <CheckStroke
          {...boxStyles}
          stroke={isFocusVisible ? '#FFF' : color}
          strokeWidth="2"
        />
        <CheckFill {...boxStyles} fill={color} fillOpacity="0.5" />
        {isSelected && (
          <CheckMark
            d="M5.45703 11.2916L8.3946 14.375L14.5401 6.625"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="3.8637"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        )}
        {props.isIndeterminate && (
          <rect x={5} y={9} width={10} height={2} fill="#FFF" />
        )}
      </svg>
      {props.children}
    </Label>
  );
}

export { useToggleState as useCheckboxState } from 'react-stately';
