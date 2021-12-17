import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArticleOptions from '../components/article/ArticleOptions';
import Header from '../components/common/Header'
import ImgWrapper from '../components/common/ImgWrapper';
import { Tag, TagWrap } from '../components/home/ArticleCard';
import Profile from '../components/home/Profile'

const Article = () => {
    const location = useLocation();
    const article = location.state;
    const {id, title, body, thumbnail, date, tags} = article;
    return (
        <>
            <Header/>
            <Wrapper>
                <HeadWrapper>
                    <h1>{title}</h1>
                    <HeadFoot>
                        <div>
                            <span>전희선</span>
                            <span> · </span>
                            <span>{date}</span>
                        </div>
                        <ArticleOptions article={article}/>
                    </HeadFoot>
                </HeadWrapper>
                <TagWrap>
                    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagWrap>
                <BodyWrap>
                    {thumbnail && (<ImgWrapper ratio="50%">
                        <img src={thumbnail.value} alt="thumbnail" />
                    </ImgWrapper>)}
                    <div>{body}</div>
                </BodyWrap>
                <ProfileWrap>
                <Profile/>
                </ProfileWrap>
            </Wrapper>
        </>
    )
}

export default Article

const Wrapper = styled.div`
    margin : 0px 20%;
`
const ProfileWrap = styled.div`
    margin-top: 16rem;
    margin-bottom: 6rem;
`

const BodyWrap = styled.div`
    margin-top: 5rem;
    &>div{
        margin-top:5rem;
    }
`

const HeadWrapper = styled.div`
    margin-top:5.5rem;
    &>h1{
        font-size:3rem;
        font-weight: 800;
        color: rgb(52, 58, 64);
        margin-bottom: 2rem;
    }
`

const HeadFoot = styled.div`
    display:flex;
    justify-content: space-between;
    &  button {
        outline:0;
        border:0;
        background-color: rgba(0,0,0,0);
        color:rgb(134, 142, 150);
        cursor: pointer;
        font-size: inherit;
        &:hover{
            color:rgb(52, 58, 64);
        }
    }
    &>div{
        font-weight:bolder;
    }
`
