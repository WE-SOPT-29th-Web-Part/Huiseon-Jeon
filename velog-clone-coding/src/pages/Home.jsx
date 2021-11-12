import React from 'react';
import Profile from '../components/home/Profile';
import Header from '../components/common/Header';
import HomeNav from '../components/home/HomeNav';
import ArticleContainer from '../components/home/ArticleContainer';
import styled from 'styled-components';
import { Route } from 'react-router';
import SeriesCategory from './SeriesCategory';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeBody>
                <Profile/>
                <HomeNav/>
                <Route exact path="/" component={ArticleContainer}/>
                <Route exact path="/series" component={SeriesCategory}/>
            </HomeBody>
        </div>
    );
};

export default Home;

const HomeBody = styled.div`
    margin : 0px 20%;
`