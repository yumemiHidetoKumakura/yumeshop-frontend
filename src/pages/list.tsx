import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Breadcrumbs } from 'src/components/organisms/Breadcrumbs';
import { Container, Main, Title, TokenTest } from 'src/styles/Home';
import { ShopItemsApi } from 'src/openapi/generated/typescript-fetch/apis/ShopItemsApi'
import { ShopItem } from 'src/openapi/generated/typescript-fetch';
import { CardDetail, CardDetailProps } from 'src/components/organisms/CardDetail';
import styled from 'styled-components';
import { breakPoints } from 'src/styles/Tokens';

const Wrapper = styled.div`
  width: 94%;
  padding: 8px;
  margin: auto;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  picture {
    width: 30%;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 32px;
    font-weight: 700;
  }
`

const Li = styled.li`
  margin-bottom: 8px;
  @media screen and (min-width: ${breakPoints.pcDisplaySize}) {
    margin-bottom: 16px;
  }
`;

const List: NextPage = () => {
  const [shopItems, setShopItems] = useState<(CardDetailProps & {id:string})[] | undefined>(undefined);
  useEffect(() => {
    new ShopItemsApi().getShopItems({})
      .then((response) => {
        const fetchedShopItems: (CardDetailProps & {id:string})[] = 
          response.map(({id, name, price, tags, thumbnail}) => ({
            id,
            selling_price: price.selling_price,
            original_price: price.original_price,
            discount_percentage: price.discount_percentage,
            tags,
            text: name,
            imageUrl: thumbnail 
          }))
        setShopItems([])
      })
  });
  const list_name = "xxx";
  const items = [
    {
      link_url: "/",
      text: "TOP"
    },
    {
      text: list_name + "一覧"
    }
  ]
  return (
    <>
      <Breadcrumbs items={items} />
      <Wrapper>
        <h1>
          {list_name}一覧
        </h1>
        {shopItems && (shopItems.length != 0) ? 
          <ul style={{listStyleType: "none"}}>
            {shopItems.map((shopitem) => <Li key={shopitem.id} > <CardDetail { ...shopitem } /> </Li>)}
          </ul>: 
          <Hamburger>
            <picture className='Hamburger'><img src={'/Hamburger.svg'} alt="" /></picture>
            <p>商品がありませんでした</p>
          </Hamburger>
        }
      </Wrapper>
      <Breadcrumbs items={items} />
    </>
  )
};

export default List;
