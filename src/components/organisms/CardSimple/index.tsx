import { VFC } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from 'src/styles/Tokens';

type CardSimpleProps = {
  imageUrl: string;
  text: string;
}

const Wrapper = styled.section`
  font-size: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 200px;
  img {
    width: 200px;
    border-radius: 8px 8px 0px 0px;
    height: 200px;
    background: ${colors.Gray};
  }
  p {
    width: 200px;
    padding: 8px;
  }
  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    width: 244px;
    img {
      width: 244px;
      height: 244px;
    }
    p {
      width: 244px;
      padding: 8px;
    }
  }
`;

export const CardSimple: VFC<CardSimpleProps> = (props) => {
  const { imageUrl, text } = props;

  return (
    <Wrapper>
      <picture>
        <img src={imageUrl} alt="" />
      </picture>
      <p>{text}</p>
    </Wrapper>
  );
};
