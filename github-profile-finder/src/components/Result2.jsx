import React from 'react';
import PendingResult from './PendingResult';
import RejectedResult from './RejectedResult';
import Result from './Result';

const Result2 = ({userInfo, setUserInfo}) => {
    //idle일때는 아무것도 안보여주고
    //panding 일때는 로딩중임을 보여주고
    //rejected일때는 사용자가 없습니다.
    //resolved일때는 card를 보여주자.
    switch(userInfo.status){
        case "pending":
            return <PendingResult></PendingResult>
        case "resolved":
            return <Result userInfo={userInfo.data} setUserInfo={setUserInfo}></Result>
        case "rejected":
            return <RejectedResult></RejectedResult>
        case "idle":
        default:
            return <></>    
    }
};

export default Result2;