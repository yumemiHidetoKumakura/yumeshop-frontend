import { VFC } from 'react';
import styled from 'styled-components';
import { breakPoints } from 'src/styles/Tokens';
import { Tag } from 'src/openapi/generated/typescript-fetch/models/Tag';
import { Tags } from 'src/components/organisms/Tags/index';

type CardWideProps = {
  date: string,
  tags: Tag[],
  text: string,
}

const Wrapper = styled.section`
  font-size: 12px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 343px;
  p {
    padding: 0px 8px 8px 8px;
  }
  div {
    display: flex;
    padding-bottom: 0px;
    p {
      padding: 8px;
      width: auto;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: ${breakPoints.tbDisplaySize}) {
    width: 704px;
    p {
      padding: 0px 16px 8px;
    }
  }
  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    width: 1024px;
    p {
      padding: 0px 16px 16px;
    }
  }
`;

export const CardWide: VFC<CardWideProps> = (props) => {
  const { date, tags, text } = props;

  return (
    <Wrapper>
      <div>
        <p>{ date }</p>
        <Tags items={tags} />
      </div>
      <p>{ text }</p>
    </Wrapper>
  );
};
