import React from 'react';
import styled from 'styled-components';

const Preview = ({setArticleData}) => {
    const handlerChange = (e) => {
        setArticleData(articleData => ({
            ...articleData, 
            summary: e.target.value
        }));
    }
    return (
        <Wrapper>
         <Title>포스트 미리보기</Title>
         <SummaryInput onChange={handlerChange} placeholder="당신의 포스트를 짧게 소개해보세요."></SummaryInput>   
        </Wrapper>
    );
};

export default Preview;

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 1.5;
`
const Title = styled.h3`
    font-size: 1.3125rem;
    color: rgb(52, 58, 64);
    line-height: 1.5;
    margin-bottom: 0.5rem;
    font-weight:bold;
`
const SummaryInput = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px 0px;
    line-height: 1.5;
    font-size: 0.875rem;
    height: 7.375rem;
    /* padding: 0.75rem 1rem; */
    margin-top: 0.5rem;
`