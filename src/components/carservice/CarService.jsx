import React from 'react';
import NavItem from '../topnavgation/NavItem';
import * as S from './CarService.style'
const CarService = () => {
    return (
        <div>
            <S.CategoryBox>
                <S.Title>필름류</S.Title>
                <NavItem title={"썬팅"}></NavItem>
                <NavItem title={"랩핑"}></NavItem>
                <NavItem title={"PPF/차량보호필름"}></NavItem>
            </S.CategoryBox>


            <S.CategoryBox>
                <S.Title>외장관리</S.Title>
                <NavItem title={"세차"}></NavItem>
                <NavItem title={"광택"}></NavItem>
                <NavItem title={"디테일세차"}></NavItem>
            </S.CategoryBox>

            <S.CategoryBox>
                <S.Title>차량수리</S.Title>
                <NavItem title={"차량수리"}></NavItem>
                <NavItem title={"판금/도장"}></NavItem>
                <NavItem title={"유리교체"}></NavItem>
                <NavItem title={"타이어"}></NavItem>
            </S.CategoryBox>


            <S.CategoryBox>
                <S.Title>자동차용품</S.Title>
                <NavItem title={"블랙박스"}></NavItem>
                <NavItem title={"네비게이션"}></NavItem>
                <NavItem title={"LED"}></NavItem>
                <NavItem title={"후방카메라"}></NavItem>
                <NavItem title={"후방감지기"}></NavItem>
                <NavItem title={"엔진오일"}></NavItem>
                <NavItem title={"라이트복원"}></NavItem>
                <NavItem title={"렌트카"}></NavItem>
            </S.CategoryBox>
        </div>
    );
};

export default CarService;