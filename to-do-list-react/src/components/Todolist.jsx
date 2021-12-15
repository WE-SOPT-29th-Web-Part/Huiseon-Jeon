import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from './List';

const Todolist = ({title, state, setState}) => {
    const [value, setValue] = useState('');
    const [lists, setLists] = useState([]);

    const handlerChange = (e) => {
        setValue(e.target.value);
    }

    const handlerClick = () => {
        setLists([...lists,value]);
        setValue('');
    }

    const handlerKeydown = (e) => {
        if(e.key=="Enter"){
            setLists([...lists,value]);
            setValue('');
        }
    }

    return (
        <>
        <Wrapper className={title} state={state}>
            <Title>{title === "today" ? "오늘 할 일" : "내일 할 일"}</Title>
            <Lists>
                {lists.map((list,index) => <List key={index} list={list}></List>)}
            </Lists>
            <InputDiv onChange={handlerChange} onKeyDown={handlerKeydown} type="text" value={value}/>
            <BtnWrapper>
                <BtnPlus onClick={handlerClick}>+</BtnPlus>
            </BtnWrapper>
        </Wrapper>
        </>
    );
};

export default Todolist;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms ease;
    &.today{
        width:${props => props.state === "tomorrow" ?'0' : '100%'};
        visibility : ${props => props.state === "tomorrow" ?'hidden' : 'visible'};
        border-right: ${props => props.state === "both" ? '3px dashed #6e69a8': '0'};
    }
    &.tomorrow{
        width:${props => props.state === "today" ?'0' : '100%'};
        visibility : ${props => props.state === "today"? 'hidden' : 'visible'};
    }
`
const Title = styled.h2`
    border : 3px solid #6e69a8;
    padding: 5px;
    margin : 20px;
    border-radius: 25% 0%;
    color : #6e69a8;
    font-weight: bold;
    font-size:20px;
`

const Lists = styled.ul`
    flex-grow : 1;
    width: 100%;
    padding: 0 20px;
`

const InputDiv = styled.input`
    width:100%;
    border: 0;
    outline: 0;
    background-color: #efeeff;
`
const BtnWrapper = styled.div`
    padding: 5px 0;
`

const BtnPlus = styled.button`
    font-size:25px;
    color:white;
    background-color: #6e69a8;
    border: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`
