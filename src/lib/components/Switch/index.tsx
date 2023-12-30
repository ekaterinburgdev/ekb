import styled from 'styled-components';
import { useFocusRing, VisuallyHidden } from 'react-aria';
import { ICheckboxState } from '../../types/ICheckboxState';

export interface SwitchProps extends ICheckboxState {}

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  gap: 4px;
  rect,
  circle {
    transition: all 0.2s;
  }
`;

export function Switch({ isSelected, toggle }: SwitchProps) {
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Label>
      <VisuallyHidden>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={toggle}
          {...focusProps}
        />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true">
        <rect
          x={1}
          y={1}
          width={38}
          height={20}
          rx={10}
          fill={isSelected ? 'rgba(0, 180 ,0, 75%)' : 'rgba(255,255,255,.16)'}
          stroke={isFocusVisible ? '#FFF' : '#0F182E'}
          strokeWidth={2}
        />
        <circle
          cx={isSelected ? 30 : 10}
          cy={11}
          r={8}
          fill={isSelected ? '#FFF' : '#9B9EA8'}
        />
      </svg>
    </Label>
  );
}

export { useToggleState as useSwitchState } from 'react-stately';
