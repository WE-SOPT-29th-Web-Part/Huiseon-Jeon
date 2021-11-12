import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/images/profile.png';
import {ReactComponent as Github} from '../../assets/icons/githubIC.svg';
import {ReactComponent as Home} from '../../assets/icons/homepageIC.svg';
import {ReactComponent as Email} from '../../assets/icons/emailIC.svg';

const Profile = () => {
    return (
        <>
        <ProfileWrapper>
            <ProImg src={Img} alt="profile"/>
            <Wrapper>
                <NickName>전희선</NickName>
                    <div>반갑습니다 리액트 어린이에용~</div>
                
            </Wrapper>
        </ProfileWrapper>
        <Line></Line>
        <Icons>
            <Github alt="github"/>
            <Home alt="homepage"/>
            <Email alt="email"/>
        </Icons>
        
        </>
    );
};

export default Profile;

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`
const Icons = styled.div`
    display:flex;
    gap:30px;
    margin-left:30px;
    &>*{
        fill:darkgray;
        &:hover{
            fill:black;
            cursor: pointer;
        }
    }
    
`

const ProfileWrapper = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
    gap:10px;
`

const ProImg = styled.img`
    width:200px;
    height:200px;
`

const NickName = styled.div`
    font-size : 30px;
    font-weight : bold;
`
const Line = styled.div`
    width:100%;
    background-color: darkgray;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`