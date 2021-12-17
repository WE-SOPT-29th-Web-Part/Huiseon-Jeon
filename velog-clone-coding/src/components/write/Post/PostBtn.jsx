import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const PostBtn = ({handlerPost}) => {
    const handlerClick = async () =>{
        await handlerPost()
    }
    return (
        <BtnWrapper>
                <Btn color={"rgb(241, 243, 245)"}>취소</Btn>
                <Btn color={"rgb(32, 201, 151)"} onClick={handlerClick}>출간하기</Btn>
        </BtnWrapper>
    );
};

export default PostBtn;

const BtnWrapper = styled.div`
    display:flex;
    flex-grow: 1;
`

const Btn = styled.button`
    background: ${props => props.color};
    margin : 10px;
    height:2.5rem;
    font-size:1.125rem;
    color:${props => props.color === "rgb(32, 201, 151)" ? 'white' : 'black'};;
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