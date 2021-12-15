import React from 'react';
import styled from 'styled-components';

const ArticleBody = ({setArticleData}) => {
    const handlerChange = (e) => {
        setArticleData(articleData => ({
            ...articleData, 
            body: e.target.value
        }));
    }

    return (
        <div>
            <InputContent placeholder="당신의 이야기를 적어보세요..." onChange={handlerChange}>
            </InputContent>
        </div>
    );
};

export default ArticleBody;

const InputContent = styled.textarea`
    width:100%;
    font-size:1.125rem;
    outline: none;
    border: 0;
    height:58vh;
    resize: none;
`