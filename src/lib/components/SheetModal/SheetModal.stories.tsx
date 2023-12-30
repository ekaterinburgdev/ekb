import { StoryFn } from '@storybook/react';
import { SheetModal, SheetModalProps } from '.';

export default {
  title: 'Atoms/SheetModal',
  component: SheetModal,
};

const Template: StoryFn<typeof SheetModal> = (args: SheetModalProps) => {
  return <SheetModal {...args}>123123</SheetModal>;
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
