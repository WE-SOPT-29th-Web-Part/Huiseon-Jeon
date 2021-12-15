import React, { useState } from 'react';
import ArticleTitle from '../components/write/ArticleTitle';
import ArticleTag from '../components/write/ArticleTag';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import {client} from '../libs/api';
import styled from 'styled-components';
import PostPage from '../components/write/Post/PostPage';

const Write = () => {
    const [isPost, setIsPost] = useState(false);
    const [articleData,setArticleData] = useState({
        id:"",
        title:"",
        body:"",
        summary:"",
        series:"",
        tags:[],
        thumbnail:"",
        date:"",
    });

    const createArticle = async () =>{
        const {data} = await client.get('/article');
        const id = data.length + 1;
        const now = new Date();
        const date = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`;

        await client.post('/article',{
            ...articleData, 
            id, 
            date, 
            thumbnail:"",
            series:"",
        });
    };

    const handlerPost = async () =>{
        await createArticle();
    }

    return (
        !(isPost) ? (
        <>
        <Wrapper>
            <ArticleTitle setArticleData={setArticleData}/>
            <ArticleTag tags={articleData.tags} articleData={articleData} setArticleData={setArticleData}/>
            <ArticleBody setArticleData={setArticleData}/>
        </Wrapper>
        <ArticleFooter articleData={articleData} setIsPost={setIsPost}/>
        </>
        ) : 
        (
        <>
        <PostPage handlerPost={handlerPost} setArticleData={setArticleData}/>)
        </>
        )
    );
};

export default Write;

const Wrapper = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    margin:40px;
`