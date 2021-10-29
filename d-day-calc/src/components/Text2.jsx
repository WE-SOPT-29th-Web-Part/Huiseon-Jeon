import React, { useCallback, useEffect, useState } from 'react';

const Text2 = ({year, month, date}) => {
    const [inputValue, setInputValue] = useState("");
    const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
    //어떤것을 상태로 올것인가 -> 변화하는 값
    //input 값과, year, month, date값을 연산하여 resultDate에 넣어준다.

    const handleChange = (e) => {
        setInputValue(e.target.value);
        printDate(e.target.value); //입력값 넣어줌
    };

    const printDate=useCallback(
        (value)=>{
        const tempDate = new Date();
        tempDate.setFullYear(Number(year));
        tempDate.setMonth(Number(month)-1);
        tempDate.setDate(Number(date)-Number(value));
        
        const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth()+1}월 ${tempDate.getDate()}일` 
        setResultDate(result);
    },[year,month,date]);

    useEffect(() => {
        printDate(inputValue)
    }, [inputValue,printDate]);

    return (
        <div className="text">
        <div className="text__left">
            D-<input className="text__right" type="text" value={inputValue}
                onChange={handleChange}/>
            는?
        </div>
        <div>{resultDate}</div>
    </div>
    );
};

export default Text2;