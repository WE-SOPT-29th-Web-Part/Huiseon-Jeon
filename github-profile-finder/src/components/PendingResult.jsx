import React from 'react';
import styled from 'styled-components';

const PendingResult = () => {
    return (
        <Root>
        </Root>
    );
};

export default PendingResult;

const Root = styled.div`
    font-size: 10px;
    margin: 50px auto;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    background: #000000;
    position: relative;
    animation: load 1.4s infinite linear;
    transform: translateZ(0);
    &:before{
        width: 50%;
        height: 50%;
        background: #ffffff;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    &:after{
        background: rgb(27,29,33);
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    @keyframes load {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
  }
`