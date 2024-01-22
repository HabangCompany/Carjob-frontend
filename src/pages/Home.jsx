import React from 'react';
import TopnavgationItem from '../components/topnavgation/TopnavgationItem';
import MainHeader from '../components/mainheader/MainHeader';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLogined } from '../atom/globalstate';
import { getCookie } from '../util/cookie';

const Home = () => {
    const [loginState, setLoginState] = useRecoilState(isLogined)
    let cookie = getCookie('access_token')
    console.log(cookie)
    if (cookie != null) {
        setLoginState(true)
    }


    console.log(loginState)
    return (
        <>
            <TopnavgationItem></TopnavgationItem>
            <MainHeader />
        </>
    );
};

export default Home;