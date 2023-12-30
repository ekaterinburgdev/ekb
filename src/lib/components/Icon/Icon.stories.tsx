import { StoryFn } from '@storybook/react';
import { IconProps, IconType } from '.';
import { Icon } from '.';
import { ICON_BY_TYPE } from './Icon.constants';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {},
};

const Template: StoryFn<typeof Icon> = (args: IconProps) => {
  return (
    <div style={{ gap: 8, display: 'flex' }}>
      {Object.keys(ICON_BY_TYPE).map((type) => (
        <Icon color="white" {...args} type={type as IconType} />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: IconType.Bike,
};
