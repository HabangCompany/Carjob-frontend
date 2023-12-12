import React from 'react';
import  * as S from './Header.style'
import MenuIcon from '@/assets/header/menu.svg';
import SearchIcon from '@/assets/header/search.svg';



const Header = () => {
    return (
        <S.container>
            <div><S.Icon src={MenuIcon} alt="Menu" /></div>
            <S.Logo>카잡</S.Logo>
            <div><S.Icon src={SearchIcon}></S.Icon></div>
        </S.container>
    );
};

export default Header;
