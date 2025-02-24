import { VFC } from 'react';
import styled from 'styled-components';
import { Tag } from 'src/openapi/generated/typescript-fetch/models/Tag';

type TagsProps = {
  items: Tag[];
};

const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  span {
    background-clip: padding-box;
    display: block;
    padding: 0em 0.5em;
    color: #ffffff;
    margin: 0.2em;
  }
`;

export const Tags: VFC<TagsProps> = ({ items }) => (
  <Wrapper>
    {items.map((item) => (
      <span style={{ backgroundColor: item.color }} key={item.name}>
        {' '}
        {item.name}{' '}
      </span>
    ))}
  </Wrapper>
);
