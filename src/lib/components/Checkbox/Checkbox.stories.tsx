import { StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { useToggleState } from 'react-stately';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template: StoryFn<typeof Checkbox> = (args: CheckboxProps) => {
  const state = useToggleState();
  return <Checkbox {...state} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
