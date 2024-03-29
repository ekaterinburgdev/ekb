import { StoryFn } from '@storybook/react';
import {
  ALL_PROJECTS,
  ProjectsPanel,
  PROJECT_DEV,
  PROJECT_GUIDES,
  PROJECT_TRANSPORT,
  Theme,
} from '.';
import { Props } from './components/ProjectsPanel';

export default {
  title: 'Organisms/ProjectsPanel',
  component: ProjectsPanel,
};

const Template: StoryFn<typeof ProjectsPanel> = (args: Props) => (
  <ProjectsPanel {...args} />
);

export const Dev = Template.bind({});
Dev.args = {
  activeProjectId: PROJECT_DEV.id,
};

export const Transport = Template.bind({});
Transport.args = {
  projects: ALL_PROJECTS,
  activeProjectId: PROJECT_TRANSPORT.id,
  theme: Theme.LIGHT,
};

export const Guides = Template.bind({});
Guides.args = {
  activeProjectId: PROJECT_GUIDES.id,
  theme: Theme.LIGHT,
  projects: ALL_PROJECTS,
  toggleStyle: {
    width: '300px',
    backgroundColor: '#E3F0DB',
  },
};
