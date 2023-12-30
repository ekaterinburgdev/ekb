import { StoryFn } from '@storybook/react';
import { Link, LinkProps, LinkSize } from '.';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    size: {
      options: LinkSize,
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<typeof Link> = (args: LinkProps) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Link {...args} size={LinkSize.MEDIUM}>
        Medium
      </Link>
      <Link {...args} size={LinkSize.SMALL}>
        Small
      </Link>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
