import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const SearchBar = ({setUserInfo}) => {
    const [user, setUser] = useState("");

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = async (e) =>{
        //submit를 하면 기본적으로 새로고침이 됨. 이것을 방지하고 싶다.
        e.preventDefault(); //이벤트 막음
        setUserInfo((currentUserInfo) => ({...currentUserInfo, status:"pending"})); //데이터 로딩중
        
        //user값을 이용하여 정보를 받아오자.
        //서버에 있는 데이터를 받아오는 방법 -> 온라인에 올라와있는 데이터를 받아오자.
        // 서버통신이 필요하다. -> 서버통신에는 받아오는데 시간이 걸린다. -> 비동기다.
        // 비동기 처리를 하기위한 방법 -> async await
        // axios는 서버통신을 도와주는 툴
        //get은 받아온다는 의미, rest api의 한 종류
        
        //구조분해할당
        try{
            const { data } = await axios.get(`https://api.github.com/users/${user}`);
            setUserInfo(currentUserInfo => ({
                ...currentUserInfo,
                data, //key와 value가 같을때 -> data:data
                status:"resolved" //받아오는 데 성공한 상태
            }));
        } catch(error){
            setUserInfo(currentUserInfo => ({
                ...currentUserInfo,
                data:null, //key와 value가 같을때 -> data:data
                status:"rejected" //받아오는 데 성공한 상태
            }));
            console.log(error);
        }
        setUser("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input value={user} onChange={handleChange} type="text" placeholder="Github 프로필을 검색해보세요."/>
        </form>
    );
};

export default SearchBar;

const Input = styled.input`
    width: 320px;
    height: 57px;
    padding: 16px;
    color: rgb(229,230,231);
    background-color: rgb(36,39,43);
    outline: none;
    border: 8px solid rgba(105,105,105,0.5);
    border-radius: 20px;
`;