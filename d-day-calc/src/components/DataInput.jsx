import React from 'react';

const DataInput = ({year, month, date, setYear, setMonth, setDate}) => {
    const handleChange = (e, setState) => {
        setState(e.target.value);
    };

    const resetToday = () =>{
        setYear(new Date().getFullYear());
        setMonth(new Date().getMonth()+1);
        setDate(new Date().getDate());
    }

    return (
        <div id="dateInput">
            <button onClick={resetToday}>오늘</button>
            <div>
                <input 
                    onChange={(e) => handleChange(e,setYear)} 
                    type="text" 
                    className="dateInput__input" 
                    value={year}
                />년
                <input 
                    onChange={(e) => handleChange(e,setMonth)} 
                    type="text" 
                    className="dateInput__input" value={month}
                />월
                <input 
                    onChange={(e) => handleChange(e,setDate)} 
                    type="text" 
                    className="dateInput__input" 
                    value={date}
                    />일을 기준으로
            </div>
        </div>
    );
};

export default DataInput;