import React from 'react';
import * as S from './TopnavgationItem.style'
import NavItem from './NavItem';
import Location from '@/assets/navitem/location.svg'
import { Link } from 'react-router-dom'
const TopnavgationItem = () => {
    const category = [
        "지역별",
        "랩핑",
        "세차",
        "썬팅",
        "LED"
    ]
    return (
        <>
            <S.Category>
                {category.map((item, idx) => <NavItem title={item} width={"100%"} icon={Location} fontsize="0.9rem"></NavItem>)}
            </S.Category >
            <S.Box>
                <NavItem title="출장서비스" width={"100%"}></NavItem>
            </S.Box>
            <S.Box>
                <S.Linkpage to='/jobs' width='100%'>
                    <NavItem title="일구해요?" ></NavItem>
                </S.Linkpage>
                <S.Linkpage to='/find-jobs' width='100%'>
                    <NavItem title="사람구해요?" ></NavItem>
                </S.Linkpage>
            </S.Box>
            {/* <S.Container>
            <div></div>
            <NavItem title={"더보기"} height={24}></NavItem>
        </S.Container> */}
        </>
    );
};

export default TopnavgationItem;