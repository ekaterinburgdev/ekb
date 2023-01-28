module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return config;
  },
  docs: {
    autodocs: true
  }
};