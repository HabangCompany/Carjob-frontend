import React from 'react';
import ShopCard from '../ShopCard';
import * as S from './MainHeader.style'


const MainHeader = () => {
    return (
        <>
            <S.Title>내 지역 <span style={{ color: "#747bff" }}>추천 업체들</span></S.Title>
            <S.CardContainer>
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </S.CardContainer>
        </>
    );
};

export default MainHeader;