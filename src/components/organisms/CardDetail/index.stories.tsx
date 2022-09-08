import type { Meta, Story } from '@storybook/react/types-6-0';
import { colors } from 'src/styles/Tokens';
import { TagGroup } from 'src/openapi/generated/typescript-fetch/models/TagGroup';
import { CardDetail } from './index';

export default {
  component: CardDetail,
  title: 'organisms/Carddetail',
} as Meta;

const props = {
  sellingPrice: 360,
  tags: [
    {
      id: '1',
      name: '新商品',
      color: colors.Orange,
      tag_group: TagGroup.Information,
    },
    {
      id: '2',
      name: '特別価格',
      color: colors.Red,
      tag_group: TagGroup.Information,
    },
    {
      id: '3',
      name: '期間限定',
      color: colors.YumeGreen,
      tag_group: TagGroup.Information,
    },
  ],
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  imageUrl: 'https://www.yumemi.co.jp/images/logo_yumemi_02.svg',
};

const discountProps = {
  sellingPrice: 360,
  originalPrice: 400,
  discountPercentage: 10,
  tags: [
    {
      id: '1',
      name: '新商品',
      color: colors.Orange,
      tag_group: TagGroup.Information,
    },
    {
      id: '2',
      name: '特別価格',
      color: colors.Red,
      tag_group: TagGroup.Information,
    },
    {
      id: '3',
      name: '期間限定',
      color: colors.YumeGreen,
      tag_group: TagGroup.Information,
    },
  ],
  text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  imageUrl: 'https://www.yumemi.co.jp/images/logo_yumemi_02.svg',
};

const Template: Story = () => <CardDetail {...props} />;
const Discount: Story = () => <CardDetail {...discountProps} />;

export const carddetail = Template.bind({});
export const carddetaildiscount = Discount.bind({});
