import { ComponentStory } from '@storybook/react';
import { AnimatedLogo } from './AnimatedLogo';

export default {
  title: 'Organisms/AnimatedLogo',
  component: AnimatedLogo,
};

const Template: ComponentStory<typeof AnimatedLogo> = (args) => (
  <AnimatedLogo {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Shadowed = Template.bind({});
Shadowed.args = {
  shadowed: true,
};

export const Small = Template.bind({});
Small.args = {
  radius: '60px',
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
