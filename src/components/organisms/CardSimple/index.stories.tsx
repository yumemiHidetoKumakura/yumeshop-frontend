import type { Meta, Story } from '@storybook/react/types-6-0';
import { CardSimple } from './index';

export default {
  component: CardSimple,
  title: 'organisms/Cardsimple',
} as Meta;

const props = {
  imageUrl: 'https://www.yumemi.co.jp/images/logo_yumemi_02.svg',
  text: 'テキストテキストテキストテキaストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

const Template: Story = () => <CardSimple {...props} />;

export const cardsimple = Template.bind({});
