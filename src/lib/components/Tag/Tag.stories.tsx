import { StoryFn } from '@storybook/react';
import { Tag, TagProps } from '.';

export default {
  title: 'Atoms/Tag',
  component: Tag,
};

const Template: StoryFn<typeof Tag> = (args: TagProps) => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Tag color="#E63223" {...args} />
    <Tag color="#00B4FF" {...args} />
    <Tag color="#FFF" {...args} />
    <Tag color="#000" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tag',
};
