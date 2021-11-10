import React from 'react';
import styled from 'styled-components';

const List = ({list}) => {
    return (
        <>
            <Li>
                <div>
                    <input type="checkbox"></input>
                    <span>{list}</span>
                </div>
                <DeleteBtn>X</DeleteBtn>
            </Li>
        </>
    );
};

export default List;

const Li = styled.li`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom : 2px solid black;
`
const DeleteBtn = styled.button`
    width: 24px;
    height: 24px;
    border: 0;
    color: white;
    background-color: #6e69a8;
    border-radius: 25%;
    margin:10px;
`