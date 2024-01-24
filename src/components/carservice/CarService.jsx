import React from 'react';
import NavItem from '../topnavgation/NavItem';
import * as S from './CarService.style'
import { useNavigate } from 'react-router-dom';
const CarService = () => {
    const navigate = useNavigate()
    const gotToService = (servicename) => {
        navigate(`${servicename}`)

    }
    return (
        <div>
            <S.CategoryBox>
                <S.Title>필름류</S.Title>
                <NavItem title={"썬팅"} onClick={() => gotToService("tinting")}></NavItem>
                <NavItem title={"랩핑"} onClick={() => gotToService("wraping")}></NavItem>
                <NavItem title={"PPF/차량보호필름"} onClick={() => gotToService("ppf")}></NavItem>
            </S.CategoryBox>


            <S.CategoryBox>
                <S.Title>외장관리</S.Title>
                <NavItem title={"세차"} onClick={() => gotToService("carwash")}></NavItem>
                <NavItem title={"광택"} onClick={() => gotToService("gloss")}></NavItem>
                <NavItem title={"디테일세차"} onClick={() => gotToService("detail-carwash")}></NavItem>
            </S.CategoryBox>

            <S.CategoryBox>
                <S.Title>차량수리</S.Title>
                <NavItem title={"차량수리"} onClick={() => gotToService("car-repair")}></NavItem>
                <NavItem title={"판금/도장"} onClick={() => gotToService("painting")}></NavItem>
                <NavItem title={"유리교체"} onClick={() => gotToService("autoglass")}></NavItem>
                <NavItem title={"타이어"} onClick={() => gotToService("tire")}></NavItem>
                <NavItem title={"엔진오일"} onClick={() => gotToService("엔진오일")}></NavItem>
            </S.CategoryBox>


            <S.CategoryBox>
                <S.Title>자동차용품</S.Title>
                <NavItem title={"블랙박스"} onClick={() => gotToService("blackbox")}></NavItem>
                <NavItem title={"네비게이션"} onClick={() => gotToService("navigation")}></NavItem>
                <NavItem title={"LED"} onClick={() => gotToService("led")}></NavItem>
                <NavItem title={"후방카메라"} onClick={() => gotToService("후방카메라")}></NavItem>
                <NavItem title={"후방감지기"} onClick={() => gotToService("후방감지기")}></NavItem>
                <NavItem title={"라이트복원"} onClick={() => gotToService("라이트복원")}></NavItem>
                <NavItem title={"렌트카"} onClick={() => gotToService("렌트카")}></NavItem>
            </S.CategoryBox>
        </div>
    );
};

export default CarService;