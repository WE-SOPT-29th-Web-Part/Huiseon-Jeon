import React from 'react';
import styled from 'styled-components';
import { Tag, TagWrap } from '../home/ArticleCard';

const ArticleTag = ({tags, onArrDataRemove,onDataArrChange}) => {

    const handlerKeyPress = (e) => {
        if(e.key==="Enter"){
            console.log(e.target.value);
            onDataArrChange("tags", e.target.value);
            e.target.value = "";
        }
    }
    return (
        <div>
            <TagWrap>
                { tags && tags.map((tag) => (<Tag key={tag} onClick={()=>onArrDataRemove("tags",tag)}>{tag}</Tag>))}
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