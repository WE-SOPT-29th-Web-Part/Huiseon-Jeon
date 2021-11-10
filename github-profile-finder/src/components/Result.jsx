import React from 'react';
import styled from 'styled-components';

const Result = ({userInfo,setUserInfo}) => {
    // 1.userInfo.을 계속 쓰고있다는것 => 숙제
    const {
            avatar_url,
            name,
            login,
            bio,
            html_url,
            followers,
            following,
            public_repos
    } = userInfo;
    
    const removeCard = () =>{
        setUserInfo({});
    }
    return (
        <Root>
            <button onClick={removeCard}>닫기</button>
            <img src={avatar_url} alt="" />
            <h3>{name}</h3>
            <h4>{login}</h4>
            <p>{bio}</p>
            <a href={html_url} target="_blank">Visit Github</a>
            <Ul>
                <li>
                    <strong>Followers</strong>
                    {followers}
                </li>
                <li>
                    <strong>Following</strong>
                    {following}    
                </li>
                <li>
                    <strong>Repos</strong>
                    {public_repos}
                </li>
            </Ul>
        </Root>
    );
};

export default Result;

const Root = styled.article`
    display: flex;
    flex-direction:column;
    color:white;
    justify-content: center;
    align-items: center;
    margin-top : 25px;
    background-color: rgb(44,45,53);
    width: 390px;
    border-radius: 20px;
    position: relative;
    animation: slideDown 400ms ease-in 0s 1 normal forwards;

    @keyframes slideDown {
        0% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    /* 자기선택문자 */
    & > button {
        position:absolute;
        top:15px;
        right:15px;
        width: 50px;
        height: 30px;
        background-color: rgb(36,39,43);
        color:white;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover{
            border:1px solid white;
        }
    }
    & > img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 30px;
    }

    & > h3{
        font-size: 24px;
        margin-top: 24px;
        font-weight: bold;
    }
    & > h4{
        font-size:14px;
        margin-top: 5px;
    }
    & > p{
        padding: 20px 45px;
        text-align: center;
    }
    & > a {
    text-decoration: none;
    color: gold;
    border: 1px solid gold;
    border-radius: 4px;
    padding: 8px;
    &:hover {
      background-color: gold;
      color: black;
    }
  }
`;

const Ul = styled.ul`
  margin-top: 25px;
  width:100%;
  display: flex;
  & > li {
    display: flex;
    width: 130px;
    height: 59px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.2;
    background-color: rgb(36,39,43);
    border-left: 5px solid rgb(44,48,53);
    border-right: 5px solid rgb(44,48,53);
    &:nth-child(1) {
      border-left: none;
      border-bottom-left-radius: 20px;
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom-right-radius: 20px;
    }
    & > strong {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;
