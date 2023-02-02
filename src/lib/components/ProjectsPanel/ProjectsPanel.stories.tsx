import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProjectsPanel, PROJECT_GUIDES, PROJECT_TRANSPORT } from ".";

export default {
  title: "Organisms/ProjectsPanel",
  component: ProjectsPanel,
} as ComponentMeta<typeof ProjectsPanel>;

const Template: ComponentStory<typeof ProjectsPanel> = (args) => (
  <ProjectsPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isDarkIcons: true,
};

export const Transport = Template.bind({});
Transport.args = {
  activeProjectId: PROJECT_TRANSPORT.id,
  theme: {
    background: "#fff",
    color: "#000",
  },
};

export const Guides = Template.bind({});
Guides.args = {
  activeProjectId: PROJECT_GUIDES.id,
  theme: {
    background: "#E3F0DB",
    color: "#000",
  },
};
