import React from 'react';
import TopnavgationItem from '../components/topnavgation/TopnavgationItem';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Home = () => {
    return (
        <>
            <TopnavgationItem></TopnavgationItem>
        </>
    );
};

export default Home;