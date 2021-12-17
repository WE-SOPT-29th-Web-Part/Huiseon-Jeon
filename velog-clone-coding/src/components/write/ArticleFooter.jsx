import React from 'react';
import styled from 'styled-components';
import { client } from '../../libs/api';

const ArticleFooter = ({setIsPost}) => {
    const handlerPostPage = () =>{
        setIsPost(true);
    }
    return (
        <Wrapper>
            <Btn color={"white"}>&lt; 나가기</Btn>
            <BtnWrapper>
                <Btn color="rgb(241, 243, 245)">임시저장</Btn>
                <Btn color="rgb(32, 201, 151)" onClick={handlerPostPage}>출간하기</Btn>
            </BtnWrapper>
        </Wrapper>
    );
};

export default ArticleFooter;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:50%;
    height:50px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    padding:10px;
`

const BtnWrapper = styled.div`
    display:flex;
`

const Btn = styled.button`
    background: ${props => props.color};
    margin : 10px;
    height:2.5rem;
    font-size:1.125rem;
    color: ${props => props.color === "rgb(32, 201, 151)" ? 'white' : 'black'};
    border-radius: 4px;
    padding: 0px 1.25rem;
    border:none;
    outline:none;
    cursor : pointer;
    display: inline-flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`