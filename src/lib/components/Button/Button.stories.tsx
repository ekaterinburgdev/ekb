import { StoryFn } from '@storybook/react';
import { Button, ButtonProps, ButtonSize, ButtonType } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      options: ButtonType,
      control: { type: 'radio' },
    },
    size: {
      options: ButtonSize,
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<typeof Button> = (args: ButtonProps) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button {...args} type={ButtonType.ACCENT}>
        Accent
      </Button>
      <Button {...args} type={ButtonType.DEFAULT}>
        Default
      </Button>
      <Button
        {...args}
        type={ButtonType.CONTRAST}
        href="https://map.ekaterinburg.city/"
      >
        Contrast
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
