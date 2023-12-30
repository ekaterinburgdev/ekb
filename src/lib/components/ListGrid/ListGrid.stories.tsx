import { StoryFn } from '@storybook/react';
import { ListGrid, ListGridItem } from '.';
import { Checkbox } from '../Checkbox';

export default {
  title: 'Atoms/ListGrid',
  component: ListGrid,
  argTypes: {},
};

const Template: StoryFn<typeof ListGrid> = (args: any) => {
  const rows = [
    {
      id: 1,
      title: 'Красная линия',
      subTitle: '35',
      description: 'Маршрут по историческому центру города',
      postfix: '56%',
    },
    {
      id: 2,
      title: 'Синяя линия',
      subTitle: '11',
      description: 'Маршрут по местам, связанными c царской семьей',
      postfix: '23%',
    },
    {
      id: 3,
      title: 'Title',
      subTitle: '29',
      description: 'Арт-объекты фестиваля уличного искусства «Стенограффия»',
      postfix: '31%',
    },
  ];

  return (
    <ListGrid {...args}>
      {rows.map((item) => (
        <ListGridItem key={item.id} prefix={<Checkbox />} {...item}>
          {item.title}
        </ListGridItem>
      ))}
    </ListGrid>
  );
};

export const Default = Template.bind({});
Default.args = {};
