import React from 'react';
import * as S from './NavItem.style'



const NavItem = ({title,width,height,icon}) => {
    return (
        <>
        <div>
        <S.Container width={width} height={height}>
            <S.Icon src={icon}></S.Icon>
            <S.Title>{title}</S.Title>
        </S.Container>
        </div>
        </>
    );
};

export default NavItem;