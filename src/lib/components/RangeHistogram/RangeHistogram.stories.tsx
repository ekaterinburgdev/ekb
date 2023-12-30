import { StoryFn } from '@storybook/react';
import { RangeHistogram } from '.';

export default {
  title: 'Atoms/RangeHistogram',
  component: RangeHistogram,
  argTypes: {},
};

const Template: StoryFn<typeof RangeHistogram> = (args: any) => {
  const rangeData = [
    {
      from: 1723,
      to: 1860,
      color: '#ff7461',
      value: 145,
    },
    {
      from: 1860,
      to: 1917,
      color: '#ffA34e',
      value: 263,
    },
    {
      from: 1917,
      to: 1930,
      color: '#fee678',
      value: 504,
    },
    {
      from: 1930,
      to: 1940,
      color: '#85e634',
      value: 718,
    },
    {
      from: 1940,
      to: 1955,
      color: '#0f9467',
      value: 2610,
    },
    {
      from: 1955,
      to: 1991,
      color: '#71b3ff',
      value: 11895,
    },
    {
      from: 1991,
      to: 2010,
      color: '#c270ff',
      value: 3813,
    },
    {
      from: 2010,
      to: 2023,
      color: '#f97bcf',
      value: 2807,
    },
  ];

  return (
    <RangeHistogram
      data={rangeData}
      onChange={console.log}
      width="auto"
      height={128}
      defaultMin={1723}
      defaultMax={2024}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
