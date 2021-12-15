import React from 'react';
import styled from 'styled-components';

const Navbar = ({state, setState}) => {

    const handlerClick = (e) =>{
        let val = e.target.value;
        console.log(val);
        if(val === "1") setState("today");
        else if(val === "2")  setState("tomorrow");
        else setState("both");

    }
    return (
        <>
         <NavDiv>
            <Button onClick={handlerClick} value={1}>오늘만 보기</Button>
            <Button onClick={handlerClick} value={2}>내일만 보기</Button>
            <Button onClick={handlerClick} value={3}>함께 보기</Button>
        </NavDiv>   
        </>
    );
};

export default Navbar;

const NavDiv = styled.div`
    text-align: center;
    padding : 15px 0;
    background-color: #efeeff;
`
const Button = styled.button`
    border : 0;
    background-color: #6e69a8;
    color : white;
    border-radius: 10%;
    margin-right: 10px;
    font-size: 15px;
`