import React from 'react';
import * as S from './TopnavgationItem.style'
import NavItem from './NavItem';
import Location from '@/assets/navitem/location.svg'
import { Link } from 'react-router-dom'
const TopnavgationItem = () => {
    return (
        <>
            <S.Container>
                <NavItem title="지역별" width={95} icon={Location}></NavItem>
                <NavItem title="랩핑" width={95} icon={Location}></NavItem>
                <NavItem title="세차" width={95} icon={Location}></NavItem>
                <NavItem title="썬팅" width={95} icon={Location}></NavItem>
                <NavItem title="LED" width={95} icon={Location}></NavItem>
            </S.Container>
            <S.Container>
                <NavItem title="출장서비스" width={610}></NavItem>
            </S.Container>
            <S.Container>
                <Link to='/guin'>
                    <NavItem title="일구해요?" width={300}></NavItem>
                </Link>
                <NavItem title="사람구해요?" width={300}></NavItem>
            </S.Container>
            {/* <S.Container>
            <div></div>
            <NavItem title={"더보기"} height={24}></NavItem>
        </S.Container> */}
        </>
    );
};

export default TopnavgationItem;