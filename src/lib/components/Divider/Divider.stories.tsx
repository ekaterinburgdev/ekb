import { StoryFn } from '@storybook/react';
import { Divider, DividerProps } from '.';
import { Checkbox, ListGrid, ListGridItem } from '..';

export default {
  title: 'Atoms/Divider',
  component: Divider,
};

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

const Template: StoryFn<typeof Divider> = (args: DividerProps) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ListGrid>
      {rows.map((item) => (
        <ListGridItem
          key={item.id}
          prefix={<Checkbox activeColor="red" />}
          {...item}
        >
          {item.title}
        </ListGridItem>
      ))}
    </ListGrid>
    <Divider {...args} />
    <ListGrid>
      {rows.map((item) => (
        <ListGridItem
          key={item.id}
          prefix={<Checkbox activeColor="green" />}
          {...item}
        >
          {item.title}
        </ListGridItem>
      ))}
    </ListGrid>
  </div>
);

export const Default = Template.bind({});
Default.args = {
};
