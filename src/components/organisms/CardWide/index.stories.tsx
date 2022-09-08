import type { Meta, Story } from '@storybook/react/types-6-0';
import { CardWide } from './index';
import { colors } from 'src/styles/Tokens';
import { TagGroup } from 'src/openapi/generated/typescript-fetch/models/TagGroup';

export default {
  component: CardWide,
  title: 'organisms/CardWide',
} as Meta;

const props = {
  date: "2020/12/23",
  tags: [
    {
      id: "1",
      name: "重要",
      color: colors.Red,
      tag_group: TagGroup.Information,
    },
    {
      id: "2",
      name: "新商品",
      color: colors.Orange,
      tag_group: TagGroup.Information,
    }
  ],
  text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
}

const Template: Story = () => <CardWide {...props} />;

export const cardwide = Template.bind({});
