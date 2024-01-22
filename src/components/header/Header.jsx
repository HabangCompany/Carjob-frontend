import React, { useState } from 'react';
import * as S from './Header.style'
import MenuIcon from '@/assets/header/menu.svg';
import SearchIcon from '@/assets/header/search.svg';
import Logo from '@/assets/logo.jpg'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MyInfoModalState, isLogined } from '../../atom/globalstate';
import { deleteCookie, setCookie } from '../../util/cookie';


const Header = () => {
    const [isMyInfoModal, setIsMyInfoModal] = useRecoilState(MyInfoModalState)
    const [loginState, setLoginState] = useRecoilState(isLogined)

    const MenuOpenHandler = () => {
        setIsMyInfoModal(!isMyInfoModal)
    }

    const logOut = () => {
        deleteCookie('access_token')
        deleteCookie('refresh_token')
        setLoginState(false)
    }

    return (
        <S.container>
            {loginState ? <div><S.Icon src={MenuIcon} alt="Menu" onClick={MenuOpenHandler} /></div> : <div></div>}

            <div><S.StyledLink to='/'>
                <img src={Logo} style={{ width: "40px", marginRight: "10px" }} />오토카잡
            </S.StyledLink></div>
            <S.Divflex>
                <S.Icon src={SearchIcon}></S.Icon>
                {loginState ?
                    <S.LoginButton onClick={logOut}>
                        <div >로그아웃 </div>
                    </S.LoginButton>
                    :
                    <S.LoginButton>
                        <Link to="/login" >로그인 </Link>
                    </S.LoginButton>

                }
            </S.Divflex>
        </S.container>
    );
};

export default Header;
