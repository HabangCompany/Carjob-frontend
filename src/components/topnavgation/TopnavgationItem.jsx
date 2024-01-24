import React from 'react';
import * as S from './TopnavgationItem.style'
import NavItem from './NavItem';
import Location from '@/assets/navitem/location.svg'
import { Link, useNavigate } from 'react-router-dom'
const TopnavgationItem = () => {
    const category = [
        "지역",
        "랩핑",
        "세차",
        "썬팅",
        "LED"
    ]
    const navigate = useNavigate()

    const goToCarService = () => {
        navigate('/car-service')
    }

    return (
        <>
            {/* <S.Category>
                {category.map((item, idx) => <NavItem key={idx} title={item} width={"100%"} height={"150px"} icon={Location} fontsize="0.9rem"></NavItem>)}
            </S.Category > */}
            <S.Box onClick={goToCarService}>
                <NavItem title="자동차 서비스 둘러보기" width={"100%"} height={"100px"} fontsize={"3rem"}></NavItem>
            </S.Box>
            <S.Box>
                <S.Linkpage to='/want-jobs' width='100%'>
                    <NavItem title="일구해요?" ></NavItem>
                </S.Linkpage>
                <S.Linkpage to='/find-jobs' width='100%'>
                    <NavItem title="사람구해요?" ></NavItem>
                </S.Linkpage>
            </S.Box>
        </>
    );
};

export default TopnavgationItem;