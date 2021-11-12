import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as dropdown} from '../../assets/icons/dropdown.svg';
import Img from '../../assets/images/profile.png';

const Header = () => {
    return (
        <Wrapper>
            <StyledLeft>
            <Link to="/">
                huiseon.log
                </Link>
            </StyledLeft>
            <StyledRight>
                <StyledSearch />
                <Link to="/write">
                    <WriteBtn>새 글 작성</WriteBtn>
                </Link>
                <ProfileWrapper>
                    <Dropdown fill="darkgray"/>
                    <img src={Img} alt="profile"/>
                </ProfileWrapper>
            </StyledRight>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    justify-content: space-between;
    display : flex;
    height : 4rem;
    margin : 0 70px;
`
const StyledLeft = styled.div`
    display: flex;
    align-items: center;
    color:rgb(52, 58, 64);
    cursor: pointer;
    font-size : 25px;
    font-weight : bold;
    &>a{
        text-decoration: none;
        color:rgb(52, 58, 64);
    }
`

const StyledRight = styled.div`
    display:flex;
    align-items: center;
`

const StyledSearch = styled(Search)`
    width:25px;
    height:25px;
    margin-right:1.5rem;
    cursor: pointer;
    fill:darkgray;
    &:hover{
        fill:black;
    }
`

const WriteBtn = styled.button`
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border: 1px solid rgb(52, 58, 64);
    border-radius: 1rem;
    font-weight: bold;
    background: white;
    color: rgb(52, 58, 64);
    cursor: pointer;
    margin-right: 1.5rem;
    text-decoration: none;
`

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &>img{
        width:2.5rem;
        height:2.5rem;
        border-radius: 50%;
    }
`

const Dropdown = styled(dropdown)`
    width:24px;
    height:24px;

    &:hover{
        fill:black;
    }
`  