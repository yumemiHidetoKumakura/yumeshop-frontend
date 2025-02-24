import { VFC } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from 'src/styles/Tokens';
import { Tag } from 'src/openapi/generated/typescript-fetch/models/Tag';
import { Tags } from 'src/components/organisms/Tags/index';

export type CardDetailProps = {
  sellingPrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  tags: Tag[];
  text: string;
  imageUrl: string;
};

const Wrapper = styled.section<{ isDiscount: boolean }>`
  display: flex;
  align-items: stretch;
  img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    background: ${colors.Gray};
    border-radius: 8px 0px 0px 8px;
  }
  .card-detail-text {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px;
    border-radius: 0px 8px 8px 0px;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    background-color: ${colors.White};
    > p {
      line-height: 20px;
      height: 4em;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
  .price {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    line-height: 1em;
    > * {
      display: flex;
      margin: 4px;
    }
  }
  .selling_price {
    font-size: 24px;
    color: ${(props) => (props.isDiscount ? 'red' : 'black')};
  }
  .yen {
    color: ${(props) => (props.isDiscount ? 'red' : 'black')};
  }
  .original_price {
    color: ${colors.Gray};
  }
  .tag-area {
    flex-grow: 1;
  }
  .picture-area {
    flex-shrink: 0;
    position: relative;
    width: 144px;
    height: 144px;
    > div {
      background: rgba(226, 14, 32, 0.5);
      color: ${colors.White};
      border-radius: 0px 0px 0px 8px;
      position: absolute;
      bottom: 0px;
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    .picture-area {
      width: 244px;
      height: 244px;
    }
  }
`;

export const CardDetail: VFC<CardDetailProps> = (props) => {
  const {
    sellingPrice,
    originalPrice,
    discountPercentage,
    tags,
    text,
    imageUrl,
  } = props;

  return (
    <Wrapper isDiscount={originalPrice != null}>
      <div className="picture-area">
        <picture>
          <img src={imageUrl} alt="" />
        </picture>
        {originalPrice && <div>{discountPercentage}%OFF</div>}
      </div>
      <div className="card-detail-text">
        <p>{text}</p>
        <div className="tag-area">
          <Tags items={tags} />
        </div>
        <div className="price">
          <span>税別</span>
          {originalPrice && (
            <div className="original_price">{originalPrice}→</div>
          )}
          <div className="selling_price">{sellingPrice}</div>
          <span className="yen">円</span>
        </div>
      </div>
    </Wrapper>
  );
};
