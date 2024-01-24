import React, { useEffect } from 'react';
import TopnavgationItem from '../components/topnavgation/TopnavgationItem';
import MainHeader from '../components/mainheader/MainHeader';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLogined } from '../atom/globalstate';
import { getCookie } from '../util/cookie';

const Home = () => {
    const [loginState, setLoginState] = useRecoilState(isLogined)
    let cookie = getCookie('access_token')
    useEffect(() => {
        if (cookie != null) {
            setLoginState(true)
        }
    }, [loginState])
    return (
        <>
            <TopnavgationItem></TopnavgationItem>
            <MainHeader />
        </>
    );
};

export default Home;