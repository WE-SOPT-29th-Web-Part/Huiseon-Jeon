import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = () => {
    const [isHomeClick,setIsHomeClick] = useState(true);
    const handlerClick = (e) =>{
        if(e.target.className === "home"){
            setIsHomeClick(true);
        }
        else if(e.target.className === "series"){
            setIsHomeClick(false);
        }
    }
    return (
        <>
            <NavWrapper isHomeClick={isHomeClick}>
                <Link to="/" className="home" onClick={handlerClick}>
                    글
                </Link>
                <Link to="/series" className="series" onClick={handlerClick}>
                    시리즈
                </Link>
                <SelectLine isHomeClick={isHomeClick}/>
            </NavWrapper>
        </>
    );
};

export default HomeNav;

const NavWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 4.5rem;
    display: flex;
    justify-content: center;
    width:100%;
    position : relative;

    &>a{
        width:128px;
        height:48px;
        text-align : center;
        line-height: 48px;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
        color:black;
    }
    &>a:first-child{
        color:${({isHomeClick}) => isHomeClick ? 'rgb(32, 201, 151)':'black'};
    }
    &>a:nth-child(2){
        color: ${({isHomeClick}) => isHomeClick ? 'black' : 'rgb(32, 201, 151)'};
    }
`

const SelectLine = styled.div`
    width: 128px;
    height: 3px;
    background: rgb(32, 201, 151);
    position: absolute;
    right:50%;
    bottom: -3px;
    transition: transform 250ms ease;
    transform: ${({ isHomeClick }) => isHomeClick ? "translateX(0px)" : "translateX(128px)"};
`