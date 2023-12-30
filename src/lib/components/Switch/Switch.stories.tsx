import { StoryFn } from '@storybook/react';
import { Switch, SwitchProps } from '.';

export default {
  title: 'Atoms/Switch',
  component: Switch,
};

const Template: StoryFn<typeof Switch> = (args: SwitchProps) => (
  <Switch {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
