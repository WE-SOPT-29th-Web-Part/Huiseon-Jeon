import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <>
         <FooterDiv>SOPT 29th Web Part - Huiseon</FooterDiv>   
        </>
    );
};

export default Footer;

const FooterDiv = styled.div`
    color : white;
    background-color: #6e69a8;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-weight: bold;
`