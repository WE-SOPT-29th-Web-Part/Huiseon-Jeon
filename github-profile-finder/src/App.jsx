import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import SearchBar from './components/SearchBar';

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <Root>
      <Header/>
      <SearchBar setUserInfo={setUserInfo}/>
      <Result userInfo={userInfo} setUserInfo={setUserInfo}/>
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;