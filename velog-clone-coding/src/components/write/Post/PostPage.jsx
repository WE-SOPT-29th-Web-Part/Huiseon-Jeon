import React from 'react';
import styled from 'styled-components';
import PostBtn from './PostBtn';
import Preview from './Preview';

const PostPage = ({handlerPost,setArticleData, onDataChange, summary, thumbnail}) => { 
    return (
        <Root>
        <Wrapper>
            <Preview thumbnail ={thumbnail} summary={summary} onDataChange={onDataChange} setArticleData={setArticleData}/>
            <ColLine/>
            <PostBtn handlerPost={handlerPost}/>
        </Wrapper>
        </Root>
    );
};

export default PostPage;

const Root = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 500px;
`
const Wrapper = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    margin: auto;
`
const ColLine = styled.div`
    width: 1px;
    height: 425px;
    background: rgb(233, 236, 239);
    margin: 0 2rem;
`