import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { Accordion, AccordionItem } from '.';
import { Checkbox, useCheckboxState } from '../Checkbox';
import { ListGrid, ListGridItem } from '../ListGrid';

export default {
  title: 'Organisms/Accordion',
  component: Accordion,
  argTypes: {},
};

function StatefulAccordionItem(props: ComponentProps<typeof AccordionItem>) {
  const state = useCheckboxState();

  return <AccordionItem {...state} {...props} />;
}

function ItemCheckbox() {
  const state = useCheckboxState();

  return <Checkbox {...state} />;
}

const Template: StoryFn<typeof Accordion> = (args: any) => {
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
    <div style={{ maxWidth: 400 }}>
      <Accordion {...args}>
        <StatefulAccordionItem title="Возраст домов" subTitle="3164">
          <ListGrid>
            {rows.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Возраст домов" subTitle="3164">
          <ListGrid>
            {rows.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Возраст домов" subTitle="3164">
          <ListGrid>
            {rows.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
        <StatefulAccordionItem title="Возраст домов" subTitle="3164">
          <ListGrid>
            {rows.map((item) => (
              <ListGridItem key={item.id} prefix={<ItemCheckbox />} {...item}>
                {item.title}
              </ListGridItem>
            ))}
          </ListGrid>
        </StatefulAccordionItem>
      </Accordion>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
