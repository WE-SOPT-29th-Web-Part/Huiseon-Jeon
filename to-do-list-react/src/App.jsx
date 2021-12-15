import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

function App() {
  const [state , setState] = useState('both');
  const today = "today", tomorrow = "tomorrow";
 
  return (
    <Wrapper>
      <Header/>
      <Navbar state={state} setState={setState}/>
      <TodoListWrapper>
        <Todolist title={today} state = {state} setState={setState}/>
        <Todolist title={tomorrow} state = {state} setState={setState}/>
      </TodoListWrapper>
      <Footer/>
    </Wrapper>
  );
}

export default App;

const TodoListWrapper = styled.div`
    background-color: #fff8ef;
    display : flex;
    flex-grow : 1;
    justify-content: center;
    width:100%;
    height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  height:100vh;
`
