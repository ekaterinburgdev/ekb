import { IconBaseProps, IconType } from './Icon.types';

import { Auto } from './Auto';
import { Bike } from './Bike';
import { Edit } from './Edit';
import { Copy } from './Copy';
import { Link } from './Link';
import { Pdf } from './Pdf';
import { Pedestrian } from './Pedestrian';
import { Bycicle } from './Bycicle';
import { PublicTransport } from './PublicTransport';
import { Children } from './Children';
import { Download } from './Download';
import { External } from './External';
import Heart from './Heart';
import { BrokenHeart } from './BrokenHeart';

export const ICON_BY_TYPE: Record<
  IconType,
  (props: IconBaseProps) => JSX.Element
> = {
  [IconType.Auto]: Auto,
  [IconType.Bike]: Bike,
  [IconType.BrokenHeart]: BrokenHeart,
  [IconType.Bycicle]: Bycicle,
  [IconType.Children]: Children,
  [IconType.Copy]: Copy,
  [IconType.Download]: Download,
  [IconType.Edit]: Edit,
  [IconType.External]: External,
  [IconType.Heart]: Heart,
  [IconType.Link]: Link,
  [IconType.Pdf]: Pdf,
  [IconType.Pedestrian]: Pedestrian,
  [IconType.PublicTransport]: PublicTransport,
};
