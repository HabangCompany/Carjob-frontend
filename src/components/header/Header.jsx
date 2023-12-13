import React from 'react';
import * as S from './Header.style'
import MenuIcon from '@/assets/header/menu.svg';
import SearchIcon from '@/assets/header/search.svg';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <S.container>
            <div><S.Icon src={MenuIcon} alt="Menu" /></div>
            <div><S.StyledLink to='/'>오토카잡</S.StyledLink></div>
            <div><S.Icon src={SearchIcon}></S.Icon></div>
        </S.container>
    );
};

export default Header;
