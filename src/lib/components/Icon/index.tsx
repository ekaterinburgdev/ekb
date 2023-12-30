import { useMemo } from 'react';
import { ICON_BY_TYPE } from './Icon.constants';
import { IconType, IconBaseProps } from './Icon.types';

export type IconProps = IconBaseProps & {
  type: IconType;
};

export function Icon({
  type,
  color = 'currentColor',
  ...baseProps
}: IconProps) {
  const IconComponent = useMemo(() => ICON_BY_TYPE[type], [type]);

  return <IconComponent color={color} {...baseProps} />;
}

export { IconType } from './Icon.types';
