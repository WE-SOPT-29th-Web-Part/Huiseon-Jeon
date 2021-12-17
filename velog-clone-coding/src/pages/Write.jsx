import React, { useEffect, useState } from 'react';
import ArticleTitle from '../components/write/ArticleTitle';
import ArticleTag from '../components/write/ArticleTag';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import {client} from '../libs/api';
import styled from 'styled-components';
import PostPage from '../components/write/Post/PostPage';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const article = location.state;
    const [isPost, setIsPost] = useState(false);
    const [articleData,setArticleData] = useState(
        article ?? {
        title: "",
        body:"",
        summary: "",
        series: "",
        tags:[],
        thumbnail: "",
    });

    const createArticle = async () =>{
        const {data} = await client.get('/article');
        if(article){
            await client.patch(`/article/${article.id}`, articleData);
            navigate(`/article/${article.id}`,{state: articleData});
            return;
        }
        await client.post('/article',{...articleData});
        navigate("/");
    };

    const handlerPost = async () =>{
        await createArticle();
    }

    const handleDataChange = (key, value) => {
        const tempArticleData = {...articleData};
        tempArticleData[key] = value;
        setArticleData(tempArticleData);
    };

    const handleArrDataChange = (key, value) => {
        const tempArticleData = {...articleData};
        tempArticleData[key] = [...tempArticleData[key], value];
        setArticleData(tempArticleData);
    }

    const handleArrDataRemove = (key, value) => {
        const tempArticleData = {...articleData};
        tempArticleData[key] = tempArticleData[key].filter(el => el!==value);
        setArticleData(tempArticleData);
    }

    
    return (
        !(isPost) ? (
        <>
        <Wrapper>
            <ArticleTitle title={articleData.title} onDataChange={handleDataChange}/>
            <ArticleTag tags={articleData.tags} onDataArrChange={handleArrDataChange} onArrDataRemove={handleArrDataRemove}/>
            <ArticleBody body={articleData.body} onDataChange={handleDataChange}/>
        </Wrapper>
        <ArticleFooter articleData={articleData} setIsPost={setIsPost}/>
        </>
        ) : 
        (
        <>
        <PostPage summary={articleData.summary} thumbnail={articleData.thumbnail} onDataChange={handleArrDataChange} handlerPost={handlerPost} setArticleData={setArticleData}/>)
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