import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeadWrapper>
         <HeadLogo>To do list</HeadLogo>   
        </HeadWrapper>
    );
};

export default Header;

const HeadLogo = styled.h1`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    height: 60px;
    line-height: 60px;
`

const HeadWrapper = styled.div`
    height: 60px;
    color : white;
    background-color: #6e69a8;
`