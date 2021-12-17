import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgWrapper from '../common/ImgWrapper';

const ArticleCard = ({index,article}) => {

    const {
        id,
        title,
        body,
        summary,
        series,
        tags,
        thumbnail,
        date
    } = article;
    return (
        <Wrapper index={index} >
            <Link to={`article/${article.id}`} state={article}>
                {thumbnail && <ImgWrapper ratio="56%" >
                    <img src={thumbnail} alt="thumbnail"/>
                </ImgWrapper>}
                <h3>{title}</h3>
            </Link>
            <h4>{summary}</h4>
            <TagWrap>
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagWrap>
            <span>{date}</span>
        </Wrapper>
    );
};

export default ArticleCard;

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom : 50px;
    padding-top: 50px;
    border-top: ${props => (props.index === 0 ? 0 : '1px solid rgb(201, 201, 201)')};

    &>a{
        font-size:1.5rem;
        font-weight:bold;
        word-break: keep-all;
        margin: 10px;
        text-decoration:none;
        color:black;
    }

    &>h4 {
        margin-bottom: 2rem;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: rgb(73, 80, 87);
        word-break: keep-all;
        overflow-wrap: break-word;
        margin: 10px;
    }

    &>span{
        font-size:0.875rem;
        color: rgb(134, 142, 150);
        margin: 10px;
    }
`

export const Tag = styled.div`
    padding: 0 1rem;
    height:2rem;
    line-height: 2rem;
    font-weight: bold;
    border-radius:1rem;
    align-items: center;
    margin-right:10px;
    color:rgb(12,166,120);
    font-size:1rem;
    background-color: rgb(248, 249, 250);;
`

export const TagWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin: 10px;
`