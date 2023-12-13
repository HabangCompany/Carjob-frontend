import React from 'react';
import * as S from './Header.style'
import MenuIcon from '@/assets/header/menu.svg';
import SearchIcon from '@/assets/header/search.svg';
import Logo from '@/assets/logo.jpg'

const Header = () => {
    return (
        <S.container>
            <div><S.Icon src={MenuIcon} alt="Menu" /></div>
            <div><S.StyledLink to='/'>
                <img src={Logo} style={{ width: "40px", marginRight: "10px" }} />오토카잡
            </S.StyledLink></div>
            <div><S.Icon src={SearchIcon}></S.Icon></div>
        </S.container>
    );
};

export default Header;
