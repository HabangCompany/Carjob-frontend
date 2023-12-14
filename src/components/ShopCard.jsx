import React from 'react';
import * as S from './ShopCard.style'
import Test from '@/assets/test.jpeg'


const ShopCard = ({ image, shopname, }) => {
    return (
        <>
            <S.Container>
                <S.Image src={Test} />
                <S.Shopname>윤진카센터</S.Shopname>
                <S.Shopname>별점들</S.Shopname>
                <S.Shopname>태그들</S.Shopname>
                <S.Shopname>거리km</S.Shopname>
            </S.Container>
        </>
    );
};
export default ShopCard;

