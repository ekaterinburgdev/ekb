import { StoryFn } from '@storybook/react';
import { Card, CardProps } from '.';
import { Button, ButtonSize, ButtonType } from '../Button';

export default {
  title: 'Organisms/Card',
  component: Card,
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
  },
};

const Template: StoryFn<typeof Card> = (args: CardProps) => {
  return (
    <Card
      title="Название объекта"
      description="Дополнительный текст с пояснениями к названию"
      additionalInfo={['28 авг 2021, 10:03', 'Ул. Вильгельма де Геннина, 196']}
      blocks={[
        { type: 'value', title: 'Серия дома', value: 'ПКМ.11-2017-1-АР.2' },
        { type: 'value', title: 'Количество этажей', value: '12' },
        { type: 'divider' },
        {
          type: 'section',
          title: 'Дизайн-код фасада',
          value: 'Кастомный контент',
        },
      ]}
      actions={
        <>
          <Button type={ButtonType.DEFAULT} size={ButtonSize.SMALL}>
            60.345323, 56.431234 13
          </Button>
          <Button type={ButtonType.DEFAULT} size={ButtonSize.SMALL}>
            Ссылка на объект
          </Button>
        </>
      }
      footerActions={
        <>
          <Button type={ButtonType.DEFAULT} size={ButtonSize.MEDIUM}>
            Дополнить или поправить
          </Button>
          <Button type={ButtonType.DEFAULT} size={ButtonSize.MEDIUM}>
            Скачать датасет
          </Button>
        </>
      }
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
