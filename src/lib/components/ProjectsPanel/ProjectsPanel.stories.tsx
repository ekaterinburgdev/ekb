import { StoryFn } from '@storybook/react';
import { ProjectsPanel, PROJECT_GUIDES, PROJECT_TRANSPORT } from '.';
import { Props } from './components/ProjectsPanel';

export default {
  title: 'Organisms/ProjectsPanel',
  component: ProjectsPanel,
};

const Template: StoryFn<typeof ProjectsPanel> = (args: Props) => (
  <ProjectsPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Transport = Template.bind({});
Transport.args = {
  activeProjectId: PROJECT_TRANSPORT.id,
  theme: {
    background: '#fff',
    color: '#000',
  },
};

export const Guides = Template.bind({});
Guides.args = {
  activeProjectId: PROJECT_GUIDES.id,
  theme: {
    toggleBackground: '#E3F0DB',
    background: '#FFF',
    color: '#000',
  },
  toggleStyle: {
    width: '300px',
  },
};
