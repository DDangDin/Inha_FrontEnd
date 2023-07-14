import React from 'react';
import '../css/MainPage.scss';
import Header from '../components/Header'
import Footter from '../components/Footter'
import Main1 from '../components/Main1';
import Main2 from '../components/Main2';
import Main3 from '../components/Main3';
import Main4 from '../components/Main4';

const MainPage = () => {
    return (
        <div className='MainPage_Container'>
            <Header />
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
            <Footter />
        </div>
    );
};

export default MainPage;