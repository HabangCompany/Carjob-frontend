import React, { useState } from 'react';
import * as S from './Header.style'
import MenuIcon from '@/assets/header/menu.svg';
import SearchIcon from '@/assets/header/search.svg';
import Logo from '@/assets/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMyInfoModal, setIsMyInfoModal] = useState(false)


    return (
        <S.container>
            <div><S.Icon src={MenuIcon} alt="Menu" /></div>
            <div><S.StyledLink to='/'>
                <img src={Logo} style={{ width: "40px", marginRight: "10px" }} />오토카잡
            </S.StyledLink></div>
            <S.Divflex>
                <S.Icon src={SearchIcon}></S.Icon>
                <S.LoginButton>
                    <Link to="/login" >로그인 </Link>
                </S.LoginButton>
            </S.Divflex>
        </S.container>
    );
};

export default Header;
