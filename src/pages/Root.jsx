import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { MyInfoModalState } from '../atom/globalstate';
import MyInfoModal from '../components/header/myInfoModal/MyInfoModal';


const Root = () => {
    const isMyInfoModal = useRecoilValue(MyInfoModalState)
    return (
        <div>

            {isMyInfoModal && <MyInfoModal />}
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;