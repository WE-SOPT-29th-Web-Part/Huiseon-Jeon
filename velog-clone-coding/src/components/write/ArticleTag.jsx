import React from 'react';
import styled from 'styled-components';

const ArticleTag = ({tags, articleData,setArticleData}) => {

    const handlerKeyPress = (e) => {
        if(e.key==="Enter"){
            const tempData = {...articleData};
            tempData.tags = [...tempData.tags, e.target.value];

            setArticleData(tempData);
            e.target.value = "";
        }
    }
    return (
        <div>
            <TagWrap>
                {tags.map(tag => (<Tag key={tag}>{tag}</Tag>))}
            <TagInput type="text" placeholder="태그를 입력하세요." tabIndex="2" onKeyPress={handlerKeyPress}/>
            </TagWrap>
        </div>
    );
};

export default ArticleTag;

const TagInput = styled.input`
    display:inline-flex;
    outline:none;
    cursor: text;
    font-size: 1.125rem;
    line-height: 2rem;
    margin-bottom: 0.75rem;
    border:none;
`
const Tag = styled.div`
    display:inline-flex;
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

const TagWrap = styled.div`
    display:inline-flex;
    flex-wrap:wrap;
    margin: 10px;
`