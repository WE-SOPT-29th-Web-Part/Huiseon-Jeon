import './App.css';
import Header from './components/Header';
import DataInput from './components/DataInput';
import CenterText from './components/CenterText';
import Result from './components/Result';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  //Datainput 에서 input 값으로 년, 월, 일을 받아온다
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1 );
  const [date, setDate] = useState(new Date().getDate());
    
  return (
    <div id="app">
      <Header />
      <DataInput 
        year={year} 
        month={month} 
        date={date} 
        setYear={setYear} 
        setMonth={setMonth} 
        setDate={setDate}/>
      <CenterText 
        />
      <Result
      year={year} 
      month={month} 
      date={date} />
      <Footer />
    </div>
  );
}

export default App;
