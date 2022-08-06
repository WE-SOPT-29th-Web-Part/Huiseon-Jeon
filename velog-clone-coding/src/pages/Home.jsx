import React from 'react';
import Profile from '../components/home/Profile';
import Header from '../components/common/Header';
import HomeNav from '../components/home/HomeNav';
import ArticleContainer from '../components/home/ArticleContainer';
import styled from 'styled-components';
import { Routes , Route } from "react-router-dom";
import SeriesCategory from './SeriesCategory';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeBody>
                <Profile/>
                <HomeNav/>
                <Routes>
                    <Route  path="/series" element={<SeriesCategory/>}/>
                    <Route  path="/" element={<ArticleContainer/>}/>
                </Routes>
            </HomeBody>
        </div>
    );
};

export default Home;

const HomeBody = styled.div`
    margin : 0px 20%;
`