import React from 'react';
import styled from 'styled-components';

const ArticleTitle = ({setArticleData}) => {
    const handlerChange = (e) => {
        setArticleData(articleData => ({
            ...articleData, 
            title: e.target.value
        }));
    }

    return (
        <>
        <InputTitle 
            placeholder="제목을 입력하세요."
            onChange={handlerChange}>
        </InputTitle>
        <TitleLine></TitleLine>
        </>
    );
};

export default ArticleTitle;

const InputTitle = styled.textarea`
    width:100%;
    height:66px;
    font-size:2.75rem;
    line-height:1.5;
    outline: none;
    border:0;
    font-weight:bold;
    overflow:hidden;
    resize:none;
`
const TitleLine = styled.div`
    background: rgb(73, 80, 87);
    height: 6px;
    width: 4rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 1px;
`