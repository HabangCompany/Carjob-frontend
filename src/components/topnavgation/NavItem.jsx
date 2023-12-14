import React from 'react';
import * as S from './NavItem.style'



const NavItem = ({ title, width, height, icon, fontsize }) => {
    return (
        <>
            <S.Container width={width} height={height}>
                {icon && <S.Icon src={icon}></S.Icon>}
                <S.Title fontSize={fontsize}>{title}</S.Title>
            </S.Container>
        </>
    );
};

NavItem.defaultProps = {
    fontsize: "1rem",
    width: 100,
    height: 50,
};
export default NavItem;